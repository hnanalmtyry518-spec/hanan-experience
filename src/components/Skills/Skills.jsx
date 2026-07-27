import "./Skills.css";

import skills from "./SkillsData";

import SkillBar from "./SkillBar";

import Window from "../Common/Window";

function Skills() {

  return (

    <section className="skills">

      <Window title="SYSTEM CAPABILITIES">

        <h2 className="skills-title">

          المهارات

        </h2>

        {skills.map((skill, index) => (

          <SkillBar
            key={index}
            skill={skill}
          />

        ))}

      </Window>

    </section>

  );

}

export default Skills;