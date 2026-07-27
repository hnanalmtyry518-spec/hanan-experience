import { useEffect, useState } from "react";
import "./BootScreen.css";

function BootScreen({ onFinish }) {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setProgress((prev) => {

        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onFinish();
          }, 600);

          return 100;
        }

        return prev + 4;

      });

    }, 60);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="boot-screen">

      <h1>HANAN.EXE</h1>

      <p>&gt; Booting Portfolio...</p>

      <div className="boot-bar">

        <div
          className="boot-fill"
          style={{ width: `${progress}%` }}
        />

      </div>

      <p>{progress}%</p>

      {progress === 100 && (
        <p className="boot-ready">
          Access Granted ✓
        </p>
      )}

    </div>

  );

}

export default BootScreen;