import { useEffect, useState } from "react";

function TypeWriter({ text, speed = 40 }) {

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {

    let index = 0;

    const timer = setInterval(() => {

      setDisplayText(text.slice(0, index + 1));

      index++;

      if (index === text.length) {
        clearInterval(timer);
      }

    }, speed);

    return () => clearInterval(timer);

  }, [text, speed]);

  return <p>{displayText}</p>;

}

export default TypeWriter;