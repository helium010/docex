import axios from "axios";
import { range } from "lodash";
import { Fragment, useEffect, useRef, useState } from "react";
// import * as pdfjsLib from "pdfjs-dist";
import "./Docs.scss";
// pdfjsLib.GlobalWorkerOptions.workerSrc = "/static/pdf.worker.min.js";

const API_PREFIX = process.env.NODE_ENV === "development" ? "http://localhost:8080/api/" : "/api/";
const defaultFontSize = 16;

export function Docs() {
  const docRef = useRef<HTMLDivElement>(null);

  const listeners = useRef<{ event: "font-size-change"; fn: (size: number) => void }[]>([]);

  const [fontSize, setFontSize] = useState(defaultFontSize);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [selectedSideBar, setSelectedSideBar] = useState<null | "Docs" | "Outline">("Docs");
  const [selectedOutlineMode, setSelectedOutlineMode] = useState<"Full" | "Part">("Full");

  const [docs, setDocs] = useState<string[]>([]);
  const [docsFilter, setDocsFilter] = useState("");
  const [filteredDocs, setFilteredDocs] = useState<{ doc: string; styledDoc: string; prec: number }[]>([]);
  const [firstMatchedDoc, setFirstMatchedDoc] = useState<string | null>("");

  const [selectedDoc, setSelectedDoc] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const [outline, setOutline] = useState<{ stack: number[]; header: string; elem: HTMLHeadingElement }[]>([]);
  const [outlineFilter, setOutlineFilter] = useState("");
  const [filteredOutline, setFilteredOutline] = useState<
    {
      stack: number[];
      header: string;
      styledHeader: string;
      prec: number;
      elem: HTMLHeadingElement;
    }[]
  >([]);
  const [firstMatchedHeader, setFirstMatchedHeader] = useState<(typeof filteredOutline)[number] | null>(null);
  const [selectedHeaderIndex, setSelectedHeaderIndex] = useState(-1);
  const [partOutline, setPartOutline] = useState<typeof outline>([]);

  const [appPath, setAppPath] = useState<string[]>([]);

  useEffect(() => {
    for (const listener of listeners.current) {
      if (listener.event === "font-size-change") {
        listener.fn(fontSize);
      }
    }
  }, [fontSize]);

  useEffect(() => {
    const stored_theme = localStorage.getItem("theme");
    if (stored_theme === "dark" || stored_theme === "light") {
      setTheme(stored_theme);
    }

    function parseCurrentPath() {
      const path = window.location.pathname;
      let match = path.match(/^\/docs\/([^\/]+)\/?$/);
      if (match) {
        setSelectedDoc(match[1]);
      }

      axios.get(API_PREFIX + "docs").then((res) => {
        const docList: string[] = res.data;
        docList.sort();
        setDocs(docList);
      });
    }
    parseCurrentPath();

    window.addEventListener("popstate", parseCurrentPath);
    return () => {
      window.removeEventListener("popstate", parseCurrentPath);
    };
  }, []);

  useEffect(() => {
    const result: typeof filteredDocs = [];
    for (const doc of docs) {
      if (docsFilter) {
        let reString = "";
        for (const c of docsFilter) {
          reString += `[^${c}]*(${c})`;
        }
        const regex = new RegExp(reString, "di");
        const match = regex.exec(doc);

        if (match) {
          const indices = (match as any).indices;
          const subStrings: string[] = [];
          let offset = 0;
          let prevEnd = -1;
          let prec = 0;
          for (let i = 1; i < indices.length; i++) {
            const [startPos, endPos] = indices[i];
            subStrings.push(doc.substring(offset, startPos), doc.substring(startPos, endPos));
            if (startPos == 0) {
              prec += 3;
            }
            if (startPos === prevEnd) {
              prec++;
            }
            prevEnd = endPos;
            offset = endPos;
          }
          subStrings.push(doc.substring(offset));
          for (let i = 1; i < subStrings.length; i += 2) {
            subStrings[i] = `<span class="match">${subStrings[i]}</span>`;
          }
          result.push({ doc, styledDoc: subStrings.join(""), prec });
        }
      } else {
        result.push({ doc, styledDoc: doc, prec: 0 });
      }
    }
    result.sort((a, b) => b.prec - a.prec);
    setFilteredDocs(result);
    setFirstMatchedDoc(result.length > 0 ? result[0].doc : null);
  }, [docs, docsFilter]);

  useEffect(() => {
    if (!selectedDoc) {
      return;
    }
    setSelectedSideBar("Outline");
    setDocsFilter("");
    setOutlineFilter("");
    setOutline([]);
    setSelectedHeaderIndex(-1);
    setLoading(true);
    window.history.pushState({}, "", `/docs/${selectedDoc}`);
    document.title = `${selectedDoc}`;
    if (docRef.current) {
      docRef.current.scrollTo(0, 0);
      docRef.current.innerHTML = "";
    }

    let prevSrc = "";
    function update_once() {
      axios
        .get(API_PREFIX + `docs/${selectedDoc}`)
        .then((res) => {
          const xml: string = res.data;
          const src = xml.split("\n", 1)[0];
          if (docRef.current && prevSrc !== src) {
            prevSrc = src;
            const html = xml.substring(src.length + 1);
            docRef.current.innerHTML = html;

            for (const elem of docRef.current.querySelectorAll("a")) {
              let href = elem.getAttribute("href");
              if (href && href.startsWith(".")) {
                href = API_PREFIX + "files/src/" + href;
                elem.setAttribute("href", href);
                // Only calculate number of pages when serving on localhost,
                // because this calculation requires all pdf files in this doc retrieved from server,
                // which may cost a lot of band if there are plenty of pdfs in one doc, such as a doc
                // containing all books in a specific subject.
                if (href.endsWith(".pdf") && window.location.hostname.includes("localhost")) {
                  // pdfjsLib.getDocument(href).promise.then((pdfDoc) => {
                  //   elem.insertAdjacentHTML(
                  //     "afterbegin",
                  //     `[${pdfDoc.numPages}]<svg style="vertical-align:middle;height:0.88em" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  //       <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                  //       <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z"/>
                  //     </svg>`
                  //   );
                  // });
                  elem.insertAdjacentHTML(
                    "afterbegin",
                    `<svg style="vertical-align:middle;height:0.88em" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                        <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z"/>
                      </svg>`
                  );
                }
              }
              if (!elem.hasAttribute("target")) {
                elem.setAttribute("target", "_blank");
              }
            }
            for (const elem of docRef.current.querySelectorAll("img")) {
              let src = elem.getAttribute("src");
              if (src) {
                if (src.startsWith(".")) {
                  src = API_PREFIX + "files/src/" + src;
                }
                elem.setAttribute("src", src);
              }
              const parent = elem.parentElement;

              if (parent && parent.tagName.toLowerCase() === "p" && !elem.style.width) {
                elem.style.width = "50%";
                elem.style.margin = "0 25%";
                elem.style.backgroundColor = "white";
              }
            }
            for (const elem of docRef.current.querySelectorAll("audio")) {
              let src = elem.getAttribute("src");
              if (src) {
                if (src.startsWith(".")) {
                  src = API_PREFIX + "files/src/" + src;
                }
                elem.setAttribute("src", src);
              }
              const parent = elem.parentElement;
            }
            // Parse headers
            {
              const stack: number[] = [];
              const newOutline: typeof outline = [];
              for (const [i, elem] of docRef.current.querySelectorAll("h1, h2, h3, h4, h5, h6").entries()) {
                const level = parseInt(elem.tagName[1]) - 1;
                stack.splice(level);
                stack.push(i);
                newOutline.push({
                  stack: [...stack],
                  header: elem.innerHTML,
                  elem: elem as HTMLHeadingElement,
                });
              }
              setOutline(newOutline);
            }
            for (const elem of docRef.current.querySelectorAll("pre")) {
              if (
                elem.children.length === 1 &&
                elem.firstElementChild &&
                elem.firstElementChild.tagName.toLowerCase() === "code"
              ) {
                if (elem.firstElementChild.className === "language-ez-week-schedule") {
                  let src = (elem.firstElementChild as HTMLElement).innerText;
                  src = src.slice(0, src.length - 1);

                  const lines = src.split("\n");
                  if (lines.length === 0) {
                    continue;
                  }
                  const timeBlocks = lines
                    .shift()!
                    .split("|")
                    .map((time) => time.trim());
                  const jobs: string[][] = [];

                  for (const ln of lines) {
                    const day: string[] = [];
                    for (const item of ln.split("|").map((item) => item.trim())) {
                      if (/^\d+$/.test(item)) {
                        day.push("");
                        for (const i of range(parseInt(item) - 1)) {
                          day.push("<");
                        }
                      } else if (item.startsWith("<") && /^\d+$/.test(item.slice(1))) {
                        for (const i of range(parseInt(item.slice(1)))) {
                          day.push("<");
                        }
                      } else {
                        day.push(item);
                      }
                    }
                    if (day.length < timeBlocks.length) {
                      for (const i of range(timeBlocks.length - day.length)) {
                        day.push("");
                      }
                    }
                    jobs.push(day);
                  }
                  const today = (new Date().getDay() - 1 + 7) % 7;
                  const tomorrow = (today + 1) % 7;
                  let build = `<table class="ez-week-schedule">`;
                  build += "<tr><th>No.</th><th>Time</th>";
                  for (const j of range(jobs.length)) {
                    const className = j === today ? "today" : j === tomorrow ? "tomorrow" : "";
                    build += `<th  class="${className}">${j + 1}</th>`;
                  }

                  build += "</tr>";
                  for (const [i, block] of timeBlocks.entries()) {
                    build += "<tr>";
                    build += `<td>${i + 1}</td><td>${block}</td>`;
                    for (const j of range(jobs.length)) {
                      const className = j === today ? "today" : j === tomorrow ? "tomorrow" : "";
                      const job = jobs[j][i];
                      if (job === "<") {
                        continue;
                      } else if (job === "") {
                        let k = i + 1;
                        while (k < jobs[j].length && jobs[j][k] === "<") {
                          k++;
                        }
                        build += `<td class="${className}" rowspan=${k - i}></td>`;
                      } else {
                        let k = i + 1;
                        while (k < jobs[j].length && jobs[j][k] === "<") {
                          k++;
                        }
                        build += `<td class="${className}" rowspan=${k - i}>${job}</td>`;
                      }
                    }
                    build += "</tr>";
                  }
                  build += "</table>";
                  elem.outerHTML = build;
                }
              }
            }
            setLoading(false);
          }
        })
        .catch((err) => {
          if (err.response.status === 404) {
            if (docRef.current) {
              docRef.current.innerHTML = `<div class="text-404">Doc "${selectedDoc}" not found</div>`;
            }
          }
        });
    }
    update_once();

    const id = window.setInterval(update_once, 1000);

    function on_keydown(ev: KeyboardEvent) {
      if (ev.ctrlKey && ev.key === "q") {
        setSelectedSideBar("Docs");
        ev.preventDefault();
      }
    }
    document.addEventListener("keydown", on_keydown);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("keydown", on_keydown);
    };
  }, [selectedDoc]);

  useEffect(() => {
    const result: typeof filteredOutline = [];
    for (const { stack, header, elem } of outline) {
      if (outlineFilter) {
        let reString = "";
        for (const c of outlineFilter) {
          reString += `[^${c}]*(${c})`;
        }

        const regex = new RegExp(reString, "di");
        const headerText = header.replaceAll(/<[^>]+>/g, "");
        const match = regex.exec(headerText);
        if (match) {
          const indices = (match as any).indices;
          const subStrings: string[] = [];
          let offset = 0;
          let prevEnd = -1;
          let prec = 0;
          for (let i = 1; i < indices.length; i++) {
            const [startPos, endPos] = indices[i];
            subStrings.push(headerText.substring(offset, startPos), headerText.substring(startPos, endPos));
            if (startPos === prevEnd) {
              prec++;
            }
            prevEnd = endPos;
            offset = endPos;
          }
          subStrings.push(headerText.substring(offset));
          for (let i = 1; i < subStrings.length; i += 2) {
            subStrings[i] = `<span class="match">${subStrings[i]}</span>`;
          }

          result.push({
            stack,
            header,
            styledHeader: `<div class="header-${stack.length - 1}">${subStrings.join("")}</div>`,
            prec,
            elem,
          });
        }
      } else {
        let styledHeader = header;
        styledHeader = `<div class="header-${stack.length - 1}">${styledHeader}</div>`;
        result.push({ stack, header, styledHeader, prec: 0, elem });
      }
    }
    result.sort((a, b) => b.prec - a.prec);
    setFilteredOutline(result);
    setFirstMatchedHeader(result.length > 0 ? result[0] : null);
  }, [outline, outlineFilter]);

  useEffect(() => {
    if (!selectedDoc) {
      return;
    }

    // Set appPath
    const newPath: typeof appPath = [];
    newPath.push(selectedDoc);
    if (selectedHeaderIndex >= 0) {
      const stack = outline[selectedHeaderIndex].stack;
      for (const header of stack) {
        newPath.push(outline[header].header);
      }
    }
    setAppPath(newPath);

    // Set partOutline
    const newPartOutline: typeof partOutline = [];
    const stack = selectedHeaderIndex < 0 ? [] : outline[selectedHeaderIndex].stack;
    for (const header of outline) {
      if (
        header.stack.length === stack.length + 1 &&
        stack.every((headerIndex, i) => headerIndex === header.stack[i])
      ) {
        newPartOutline.push(header);
      }
    }
    setPartOutline(newPartOutline);
  }, [selectedDoc, outline, selectedHeaderIndex]);

  return (
    <div className={`${theme} app`}>
      <div className={"app-bar"}>
        <div
          className={`button ${selectedSideBar === "Docs" ? "selected" : ""}`}
          onClick={() => {
            setSelectedSideBar((pre) => (pre !== "Docs" ? "Docs" : null));
          }}
        >
          Docs
        </div>
        <div
          className={`button ${selectedSideBar === "Outline" ? "selected" : ""}`}
          onClick={() => {
            setSelectedSideBar((pre) => (pre !== "Outline" ? "Outline" : null));
          }}
        >
          Outline
        </div>
        <div
          className="button"
          onClick={() => {
            document.documentElement.requestFullscreen();
          }}
        >
          Full
        </div>
        <div
          className="button"
          onClick={() =>
            setTheme((pre) => {
              const new_theme = pre === "dark" ? "light" : "dark";
              localStorage.setItem("theme", new_theme);
              return new_theme;
            })
          }
        >
          Theme
        </div>
        <div
          className="button"
          onClick={() => {
            setFontSize((pre) => pre + 1);
          }}
        >
          Zoom In
        </div>

        <div
          className="button"
          onClick={() => {
            setFontSize((pre) => pre - 1);
          }}
        >
          Zoom Out
        </div>
        <div
          className="button"
          style={{ width: 32, display: "flex", justifyContent: "center", alignItems: "center" }}
          onClick={() => {
            setFontSize(defaultFontSize);
          }}
        >
          {fontSize}
        </div>
        <div
          className="button"
          onClick={() => {
            document.cookie = "password=";
            window.location.reload();
          }}
        >
          Log Out
        </div>
      </div>
      <div className="app-status-bar">
        <div className="progress" style={{ width: loading ? "100%" : "0" }} />
      </div>
      <div className="app-path">
        {appPath.map((item, i) => (
          <div className="item" key={i}>
            {item}
          </div>
        ))}
      </div>
      <div className="app-body">
        {selectedSideBar === "Docs" && (
          <div className="side-panel">
            <div className="mode"></div>
            <div className="filter">
              <input
                value={docsFilter}
                autoFocus={true}
                onChange={(e) => setDocsFilter(e.target.value)}
                onKeyUp={(e) => {
                  if (e.key === "Enter" && firstMatchedDoc) {
                    setSelectedDoc(firstMatchedDoc);
                    (e.target as HTMLInputElement).blur();
                  }
                }}
              />
              <div onClick={() => setDocsFilter("")}>⊗</div>
            </div>
            <div className="items">
              {filteredDocs.map(({ doc, styledDoc }) => (
                <div
                  className="item"
                  key={doc}
                  onClick={() => {
                    setSelectedDoc(doc);
                  }}
                  dangerouslySetInnerHTML={{
                    __html: styledDoc,
                  }}
                />
              ))}
            </div>
          </div>
        )}
        {selectedSideBar === "Outline" && (
          <div className="side-panel">
            <div className="mode">
              <div
                className={`button ${selectedOutlineMode === "Full" ? "selected" : ""}`}
                onClick={() => {
                  setSelectedOutlineMode("Full");
                }}
              >
                Full
              </div>
              <div
                className={`button ${selectedOutlineMode === "Part" ? "selected" : ""}`}
                onClick={() => {
                  setSelectedOutlineMode("Part");
                }}
              >
                Part
              </div>
            </div>
            {selectedOutlineMode === "Full" && (
              <Fragment>
                <div className="filter">
                  <input
                    value={outlineFilter}
                    autoFocus={true}
                    onChange={(e) => setOutlineFilter(e.target.value)}
                    onKeyUp={(e) => {
                      if (e.key === "Enter" && firstMatchedHeader) {
                        if (docRef.current) {
                          docRef.current.scrollBy(
                            0,
                            firstMatchedHeader.elem.getClientRects()[0].top - docRef.current.getClientRects()[0].top
                          );
                        }

                        (e.target as HTMLInputElement).blur();
                      }
                    }}
                  />
                  <div onClick={() => setOutlineFilter("")}>⊗</div>
                </div>
                <div className="items">
                  {filteredOutline.map(({ stack, header, styledHeader, elem }) => (
                    <div
                      className="item"
                      key={stack.join(",")}
                      dangerouslySetInnerHTML={{
                        __html: styledHeader,
                      }}
                      onClick={() => {
                        if (docRef.current) {
                          docRef.current.scrollBy(
                            0,
                            elem.getClientRects()[0].top - docRef.current.getClientRects()[0].top
                          );
                        }
                      }}
                    />
                  ))}
                </div>
              </Fragment>
            )}
            {selectedOutlineMode === "Part" && (
              <Fragment>
                <div className="bar">
                  <div
                    className={`button`}
                    onClick={() => {
                      if (docRef.current) {
                        const header = outline[selectedHeaderIndex];
                        if (header && header.stack.length > 1) {
                          docRef.current.scrollBy(
                            0,
                            outline[header.stack[header.stack.length - 2]].elem.getClientRects()[0].top -
                              docRef.current.getClientRects()[0].top
                          );
                        } else {
                          docRef.current.scrollTo(0, 0);
                        }
                      }
                    }}
                  >
                    Up
                  </div>
                </div>
                <div className="items">
                  {partOutline.map(({ stack, header, elem }) => (
                    <div
                      className="item"
                      key={stack.join(",")}
                      dangerouslySetInnerHTML={{
                        __html: header,
                      }}
                      onClick={() => {
                        if (docRef.current) {
                          docRef.current.scrollBy(
                            0,
                            elem.getClientRects()[0].top - docRef.current.getClientRects()[0].top
                          );
                        }
                      }}
                    />
                  ))}
                </div>
              </Fragment>
            )}
          </div>
        )}
        {selectedDoc && (
          <div
            ref={docRef}
            className="container-md"
            style={{ fontSize }}
            onScroll={(e) => {
              for (const [i, { elem }] of outline.entries()) {
                if (elem.getClientRects()[0].top - (e.target as HTMLDivElement).getClientRects()[0].top > 5) {
                  setSelectedHeaderIndex(i - 1);
                  return;
                }
              }
              setSelectedHeaderIndex(outline.length - 1);
            }}
          />
        )}
      </div>
    </div>
  );
}
