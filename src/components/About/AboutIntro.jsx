import SlideUp from "../Animations/SlideUp";
import aboutData from "./AboutData";

function AboutIntro() {
  return (
    <>
      <SlideUp delay={0.2}>
        <p className="section-tag">
          {aboutData.title}
        </p>
      </SlideUp>

      <SlideUp delay={0.4}>
        <h2 className="about-title">
          التقنية تبدأ بفهم المشكلة.
        </h2>
      </SlideUp>

      <SlideUp delay={0.6}>
        {aboutData.intro.map((text, index) => (
          <p key={index} className="about-text">
            {text}
          </p>
        ))}
      </SlideUp>
    </>
  );
}

export default AboutIntro;