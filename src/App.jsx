import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProjectList from "./components/ProjectList.jsx";
import SkillChips from "./components/SkillChips.jsx";
import ArcadeScore from "./components/ArcadeScore.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectList />
        <SkillChips />
        <ArcadeScore />
        <Contact />
      </main>
    </>
  );
}
