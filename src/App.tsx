import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
import Footer from "./components/Footer/Footer"
import Hero from "./pages/Home/Hero"

function App() {

  return (
    <div className="w-screen min-h-screen flex flex-col bg-linear-to-br from-slate-950 via-slate-900 to-black">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
