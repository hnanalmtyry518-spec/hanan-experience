import { motion } from "framer-motion";

function SkillBar({ skill }) {

  return (

    <div className="skill">

      <div className="skill-info">

        <span>{skill.name}</span>

        <span>{skill.level}%</span>

      </div>

      <div className="skill-track">

        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

      </div>

    </div>

  );

}

export default SkillBar;