import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ContraBiasFeature from "./components/ContraBiasFeature.jsx";
import ProjectList from "./components/ProjectList.jsx";
import SkillChips from "./components/SkillChips.jsx";
import About from "./components/About.jsx";
import Knowledge from "./components/Knowledge.jsx";
import ArcadeScore from "./components/ArcadeScore.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ContraBiasFeature />
        <ProjectList />
        <SkillChips />
        <ArcadeScore />
        <About />
        <Knowledge />
        <Contact />
      </main>
    </>
  );
}
