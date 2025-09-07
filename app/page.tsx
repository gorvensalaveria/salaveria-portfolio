import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import GithubRepos from "./components/GithubRepos";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VisitorCounter from "./components/VisitorCounter";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <VisitorCounter />
      <GithubRepos />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
