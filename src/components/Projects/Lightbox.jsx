import "./Lightbox.css";

function Lightbox({ image, onClose }) {

  if (!image) return null;

  return (

    <div className="lightbox" onClick={onClose}>

      <img
        src={image}
        alt="Project"
        className="lightbox-image"
      />

    </div>

  );

}

export default Lightbox;