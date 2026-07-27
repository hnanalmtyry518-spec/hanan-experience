import "./IntroScreen.css";
import Quote from "./Quote";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const quotes = [
  "There are thousands of resumes...",
  "Most of them tell you what someone did.",
  "This one will show you how I think.",
  "Welcome."
];

function IntroScreen() {

  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {

    if (index < quotes.length - 1) {

      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 2500);

      return () => clearTimeout(timer);

    }

    const finish = setTimeout(() => {
      navigate("/home");
    }, 2500);

    return () => clearTimeout(finish);

  }, [index, navigate]);

  return (

    <section className="intro">

      <Quote text={quotes[index]} />

    </section>

  );

}

export default IntroScreen;