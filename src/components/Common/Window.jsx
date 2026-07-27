import "./Window.css";

function Window({ title, children }) {
  return (
    <div className="window">

      <div className="window-header">

        <div className="window-buttons">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <p>{title}</p>

      </div>

      <div className="window-body">
        {children}
      </div>

    </div>
  );
}

export default Window;