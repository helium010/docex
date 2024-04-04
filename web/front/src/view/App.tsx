import { useEffect, useState } from "react";
import { Docs } from "./Docs";
import { Music } from "./Music/Music";



export function App() {
  const [selectedApp, setSelectedApp] = useState<"Docs" | "Music">("Docs");
  useEffect(() => {
    const path = window.location.pathname;
    let match = path.match(/^\/music.*$/);
    if (match) {
      setSelectedApp("Music");
      document.title = "Music";
    }
  }, []);
  return selectedApp === "Docs" ? <Docs /> : <Music />;
}
