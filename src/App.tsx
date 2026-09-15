import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./pages/Home/Hero";
import HomeAbout from "./components/HomeAbout/HomeAbout";
import HomeProjects from "./components/HomeProjects/HomeProjects";
import HomeContact from "./components/HomeContact/HomeContact";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const element = document.getElementById(hash.substring(1));

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [hash]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeProjects />
      <HomeContact />
    </>
  );
}

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col bg-linear-to-br from-slate-950 via-slate-900 to-black">
      <Navbar />

      <ScrollToHash />

      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
