import { useEffect, useRef, useState } from "react";
import { Music } from "./types";

const API_PREFIX = process.env.NODE_ENV === "development" ? "http://localhost:8080/api/" : "/api/";

export function Player(props: { music: Music }) {
  const [forceUpdateIndex, setForceUpdateIndex] = useState(0);

  function update() {
    setForceUpdateIndex((forceUpdateIndex) => forceUpdateIndex + 1);
  }

  const [loading, setLoading] = useState(true);

  const [currentLyrics, setCurrentLyrics] = useState<[string, string, string]>(["", "", ""]);
  const vars = useRef({
    musicAudioBuffer: null as null | AudioBuffer,
    currentSessionIndex: 0,
    currentLineIndex: -2,
    looping: false,
    paused: false,
    ctx: new AudioContext(),
    audioNodes: [] as AudioBufferSourceNode[],
    timers: [] as number[],
  });

  useEffect(() => {
    const sessionIndex = vars.current.currentSessionIndex;
    fetch(API_PREFIX + "files/" + props.music.url).then(async (fetchResponse) => {
      const musicMP3 = await fetchResponse.arrayBuffer();
      const buffer = await vars.current.ctx.decodeAudioData(musicMP3);

      if (sessionIndex !== vars.current.currentSessionIndex) {
        return;
      }

      vars.current.musicAudioBuffer = buffer;
      setLoading(false);
      appendNextNode(vars.current.ctx.currentTime + 0.2);
    });

    return () => {
      vars.current.currentSessionIndex++;
      cleanAll();
    };
  }, []);

  function connectNewNode(startTime: number, endTime: number) {
    const startFrame = Math.floor(vars.current.musicAudioBuffer!.sampleRate * startTime);
    const endFrame = Math.floor(vars.current.musicAudioBuffer!.sampleRate * endTime);

    const node = new AudioBufferSourceNode(vars.current.ctx, {
      buffer: new AudioBuffer({
        sampleRate: vars.current.musicAudioBuffer!.sampleRate,
        length: endFrame - startFrame,
        numberOfChannels: vars.current.musicAudioBuffer!.numberOfChannels,
      }),
    });
    for (let i = 0; i < vars.current.musicAudioBuffer!.numberOfChannels; i++) {
      node.buffer!.copyToChannel(vars.current.musicAudioBuffer!.getChannelData(i).subarray(startFrame, endFrame), i);
    }
    node.connect(vars.current.ctx.destination);
    vars.current.audioNodes.push(node);
    return node;
  }

  function appendNextNode(startTime: number) {
    if (!vars.current.looping) {
      vars.current.currentLineIndex++;
    }

    if (vars.current.currentLineIndex === props.music.lyrics.length) {
      vars.current.currentLineIndex = -1;
    }

    let lineStartTime: number;
    let lineEndTime: number;
    if (vars.current.currentLineIndex === -1) {
      lineStartTime = 0;
      lineEndTime = extractTimeFromLyricsLine(props.music.lyrics[0]);
      console.log(`[${startTime.toFixed(3).padStart(7, "0")}] start pre`);
    } else if (vars.current.currentLineIndex < props.music.lyrics.length - 1) {
      lineStartTime = extractTimeFromLyricsLine(props.music.lyrics[vars.current.currentLineIndex]);
      lineEndTime = extractTimeFromLyricsLine(props.music.lyrics[vars.current.currentLineIndex + 1]);

      console.log(
        `[${startTime.toFixed(3).padStart(7, "0")}] start line ${props.music.lyrics[
          vars.current.currentLineIndex
        ].substring(9)}`
      );
    } else {
      lineStartTime = extractTimeFromLyricsLine(props.music.lyrics[vars.current.currentLineIndex]);
      lineEndTime = vars.current.musicAudioBuffer!.length / vars.current.musicAudioBuffer!.sampleRate;

      console.log(
        `[${startTime.toFixed(3).padStart(7, "0")}] start last line ${props.music.lyrics[
          vars.current.currentLineIndex
        ].substring(9)}`
      );
    }

    connectNewNode(lineStartTime, lineEndTime).start(startTime);
    const timer = window.setTimeout(() => {
      appendNextNode(startTime + lineEndTime - lineStartTime);
    }, (startTime + lineEndTime - lineStartTime - vars.current.ctx.currentTime) * 1000 - 200);
    vars.current.timers.push(timer);

    setCurrentLyrics([
      vars.current.currentLineIndex >= 1 ? props.music.lyrics[vars.current.currentLineIndex - 1].substring(9) : "",
      vars.current.currentLineIndex >= 0 ? props.music.lyrics[vars.current.currentLineIndex].substring(9) : "",
      vars.current.currentLineIndex >= -1 && vars.current.currentLineIndex < props.music.lyrics.length - 1
        ? props.music.lyrics[vars.current.currentLineIndex + 1].substring(9)
        : "",
    ]);
  }

  function cleanAll() {
    vars.current.audioNodes.splice(0).forEach((node) => node.stop());
    vars.current.timers.splice(0).forEach((timer) => clearTimeout(timer));
  }

  function extractTimeFromLyricsLine(line: string) {
    const m = Number(line.substring(0, 2));
    const s = Number(line.substring(3, 8));
    return m * 60 + s;
  }

  if (loading) {
    return <div>Loading Music</div>;
  } else {
    return (
      <div className="player">
        <div
          className="lyrics-line"
          style={{ color: "#888" }}
          dangerouslySetInnerHTML={{
            __html: currentLyrics[0],
          }}
        />
        <div
          className="lyrics-line"
          dangerouslySetInnerHTML={{
            __html: currentLyrics[1],
          }}
        />{" "}
        <div
          className="lyrics-line"
          style={{ color: "#888" }}
          dangerouslySetInnerHTML={{
            __html: currentLyrics[2],
          }}
        />
        <div className="control-panel">
          <div
            className="button"
            onClick={() => {
              if (!vars.current.paused) {
                cleanAll();
                vars.current.paused = true;
              } else {
                vars.current.currentLineIndex--;
                appendNextNode(vars.current.ctx.currentTime + 0.1);
                vars.current.paused = false;
              }
              update();
            }}
          >
            {!vars.current.paused ? "Pause" : "Resume"}
          </div>
          <div
            className="button"
            onClick={() => {
              vars.current.looping = !vars.current.looping;
              update();
            }}
          >
            {!vars.current.looping ? "Loop" : "Continue"}
          </div>
          <div
            className="button"
            onClick={() => {
              cleanAll();
              vars.current.currentLineIndex--;
              appendNextNode(vars.current.ctx.currentTime + 0.1);
            }}
          >
            Repeat
          </div>
          <div
            className="button"
            onClick={() => {
              cleanAll();
              if (vars.current.currentLineIndex >= 0) {
                vars.current.currentLineIndex -= 2;
              }
              appendNextNode(vars.current.ctx.currentTime + 0.1);
            }}
          >
            Previous
          </div>
          <div
            className="button"
            onClick={() => {
              cleanAll();
              appendNextNode(vars.current.ctx.currentTime + 0.1);
            }}
          >
            Next
          </div>
        </div>
      </div>
    );
  }
}
