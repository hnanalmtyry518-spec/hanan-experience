import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Timeline from "../components/Timeline/Timeline";
import Reveal from "../components/Animations/Reveal";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
function Home() {
  return (
   <MainLayout>

<Hero />

<Reveal>
  <About />
</Reveal>

<Reveal>
  <Timeline />
</Reveal>

<Reveal>
  <Experience />
</Reveal>


<Reveal>
  <Projects />
</Reveal>


<Reveal>
  <Skills />
</Reveal>

<Reveal>
  <Contact />
</Reveal>

</MainLayout>
  );
}

export default Home;