import { useState } from "react";
import "./ImageGallery.css";
import Lightbox from "./Lightbox";

function ImageGallery({ images }) {

  const [current, setCurrent] = useState(0);
  const [opened, setOpened] = useState(false);
  const nextImage = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (

    <div className="gallery">

      <img
  src={images[current]}
  alt="Project"
  className="gallery-image"
  onClick={() => setOpened(true)}
/>

<Lightbox
  image={opened ? images[current] : null}
  onClose={() => setOpened(false)}
/>

      <div className="gallery-controls">

        <button
          className="gallery-btn"
          onClick={prevImage}
        >
          ←
        </button>

        <div className="gallery-dots">

          {images.map((_, index) => (

            <span
              key={index}
              className={`gallery-dot ${
                current === index ? "active" : ""
              }`}
              onClick={() => setCurrent(index)}
            />

          ))}

        </div>

        <button
          className="gallery-btn"
          onClick={nextImage}
        >
          →
        </button>

      </div>

    </div>

  );

}

export default ImageGallery;