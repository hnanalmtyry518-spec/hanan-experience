import "./Experience.css";
import experiences from "./ExperienceData";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <section className="experience" id="experience">

      <h1 className="experience-title">
        الخبرات
      </h1>

      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
        />
      ))}

    </section>
  );
}

export default Experience;