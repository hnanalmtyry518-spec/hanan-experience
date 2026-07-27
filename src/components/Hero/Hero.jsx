import "./Hero.css";
import SlideUp from "../Animations/SlideUp";

function Hero() {
  return (
    <section className="hero">

      <SlideUp delay={0.2}>
        <p className="hero-small">
          Interactive Portfolio
        </p>
      </SlideUp>

      <SlideUp delay={0.5}>
        <h1 className="hero-title">
          Hello.
          <br />
          I'm Hanan Almutairi.
        </h1>
      </SlideUp>

      <SlideUp delay={0.8}>
        <h2 className="hero-subtitle">
          Business Information Systems Graduate
        </h2>
      </SlideUp>

      <SlideUp delay={1.1}>
       <button
  className="hero-button"
  onClick={() =>
    document
      .getElementById("about")
      ?.scrollIntoView({ behavior: "smooth" })
  }
>
  Start Exploring →
</button>
      </SlideUp>

    </section>
  );
}

export default Hero;