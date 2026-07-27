import { useState } from "react";
import Window from "../Common/Window";
import LaunchTerminal from "./LaunchTerminal";

function ProjectCard({ project, onOpen }) {

  const [launching, setLaunching] = useState(false);

  return (
    <>
      <Window title={project.title}>

        <div
          className="project"
          onClick={onOpen}
          style={{ cursor: "pointer" }}
        >

          <div className="project-top">

            <h2>
              {project.emoji} {project.title}
            </h2>

            <span>{project.status}</span>

          </div>

          <p>{project.description}</p>

          <div className="stack">

            {project.stack.map((item, index) => (
              <span key={index}>
                {item}
              </span>
            ))}

          </div>

          {project.demo !== "#" && (
  <button
    className="demo-button"
    onClick={(e) => {
      e.stopPropagation();
      setLaunching(true);
    }}
  >
    Launch Demo →
  </button>
)}

        </div>

      </Window>

      {launching && (
        <LaunchTerminal
          url={project.demo}
          onClose={() => setLaunching(false)}
        />
      )}

    </>
  );

}

export default ProjectCard;