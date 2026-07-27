import "./About.css";

import AboutIntro from "./AboutIntro";
import AboutCards from "./AboutCards";

function About() {
  return (
    <section className="about" id="about">

      <AboutIntro />

      <AboutCards />

    </section>
  );
}

export default About;