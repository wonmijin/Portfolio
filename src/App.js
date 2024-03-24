import { About } from "./section/About";
import { Contact } from "./section/Contact";
import { Intro } from "./section/Intro";
import { Header } from "./section/Header";
import { Project } from "./section/Project";
import { Skill } from "./section/Skill";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Skill />
      <Project />
      <Contact />
    </>
  );
}

export default App;
