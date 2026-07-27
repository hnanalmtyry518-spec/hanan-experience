import { useEffect, useState } from "react";
import "./LaunchTerminal.css";

function LaunchTerminal({ url, onClose }) {

  const lines = [
    `> launch ${url === "#" ? "concept.exe" : "project.exe"}`,
    "",
    "Initializing...",
    "Loading Assets...",
    "Checking Components...",
    "Connecting...",
    "████████████████ 100%",
    "",
    "Demo Ready ✓",
    "Opening Browser..."
  ];

  const [displayed, setDisplayed] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {

    if (currentLine >= lines.length) {

      setTimeout(() => {

        if (url !== "#") {
          window.open(url, "_blank");
        }

        onClose();

      }, 700);

      return;
    }

    const line = lines[currentLine];

    let i = 0;

    const typing = setInterval(() => {

      setCurrentText(line.slice(0, i));

      i++;

      if (i > line.length) {

        clearInterval(typing);

        setDisplayed(prev => [...prev, line]);

        setCurrentText("");

        setCurrentLine(prev => prev + 1);

      }

    }, 35);

    return () => clearInterval(typing);

  }, [currentLine]);

  return (

    <div className="terminal-overlay">

      <div className="terminal">

        {displayed.map((line, index) => (
          <p key={index}>{line}</p>
        ))}

        {currentLine < lines.length && (
          <p>
            {currentText}
            <span className="cursor">█</span>
          </p>
        )}

      </div>

    </div>

  );

}

export default LaunchTerminal;