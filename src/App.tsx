import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
