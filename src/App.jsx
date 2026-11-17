import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { profile } from "./data";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Achievements />
        <Gallery />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>
    </>
  );
}
