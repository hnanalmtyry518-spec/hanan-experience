import SlideUp from "../Animations/SlideUp";
import aboutData from "./AboutData";

function AboutCards() {
  return (
    <SlideUp delay={0.8}>
      <div className="about-cards">

        {aboutData.cards.map((card, index) => (

          <div className="about-card" key={index}>

            <span className="card-icon">
              {card.icon}
            </span>

            <h3>{card.title}</h3>

            <p>{card.text}</p>

          </div>

        ))}

      </div>
    </SlideUp>
  );
}

export default AboutCards;