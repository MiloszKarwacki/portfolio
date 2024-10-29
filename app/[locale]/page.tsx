
import Intro from "../../components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <div className="flex flex-col items-center pt-20 md:pt-28 px-4">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;