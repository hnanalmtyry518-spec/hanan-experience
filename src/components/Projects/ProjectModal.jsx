import "./ProjectModal.css";
import ImageGallery from "./ImageGallery";

function ProjectModal({ project, onClose }) {

  if (!project) return null;

  return (

    <div className="modal-overlay" onClick={onClose}>

      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="close-button"
          onClick={onClose}
        >
          ✕
        </button>

        <h1>
          {project.emoji} {project.title}
        </h1>

        <p className="modal-description">
          {project.description}
        </p>

        <ImageGallery images={project.images} />

        <h3>التقنيات المستخدمة</h3>

        <div className="modal-stack">
          {project.stack.map((item, index) => (
            <span key={index}>
              {item}
            </span>
          ))}
        </div>

        <div className="modal-buttons">
{project.demo !== "#" && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="demo-button"
          >
            🚀 Launch Demo
          </a>
)}

          {project.video !== "#" && (
            <a
              href={project.video}
              target="_blank"
              rel="noreferrer"
              className="demo-button"
            >
              🎥 Watch Video
            </a>
          )}

          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="demo-button"
            >
              💻 GitHub
            </a>
          )}

        </div>

      </div>

    </div>

  );

}

export default ProjectModal;