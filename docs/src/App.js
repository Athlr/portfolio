import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import VSA from "./Extracurriculars/VSA";
import DEM from "./Extracurriculars/DEM";
import OL from "./Extracurriculars/OL";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/portfolio">
            <Route index element={<Home />} />
            <Route path="/about">
              <Route path="" element={<About />} />
              <Route path="/about/vsa" element={<VSA />} />
              <Route path="/about/dem" element={<DEM />} />
              <Route path="/about/marshall-orientation" element={<OL />} />
            </Route>
            <Route path="/projects">
              <Route path="" element={<Projects />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
