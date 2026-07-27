import Window from "../Common/Window";

function ExperienceCard({ experience }) {
  return (
    <Window title={experience.company}>

      <div className="experience-card">

        <div className="experience-header">

          <span className="experience-icon">
            {experience.icon}
          </span>

          <div>

            <h2>{experience.role}</h2>

            <p>{experience.duration}</p>

          </div>

        </div>

        <div className="experience-stats">

          {experience.stats.map((item, index) => (
            <div className="stat" key={index}>
              ✓ {item}
            </div>
          ))}

        </div>

      </div>

    </Window>
  );
}

export default ExperienceCard;