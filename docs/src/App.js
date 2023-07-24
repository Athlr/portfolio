import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import VSA from "./Extracurriculars/VSA";
import DEM from "./Extracurriculars/DEM";
import OL from "./Extracurriculars/OL";
import Projects from "./Projects";
import IDunno from "./Projects/iDunno";
import Manucar from "./Projects/manucar";
import Projex from "./Projects/projex";
import Genshin from "./Projects/genshin-calendar";
import Footer from "./Footer";

function App() {
  return (
    <>
      <ScrollToTop />
      <div>
        <Navbar />
        <div className="bg-mainbody">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/about">
                <Route path="" element={<About />} />
                <Route path="/about/vsa" element={<VSA />} />
                <Route path="/about/dem" element={<DEM />} />
                <Route path="/about/marshall-orientation" element={<OL />} />
              </Route>
              <Route path="/projects">
                <Route path="" element={<Projects />} />
                <Route path="/projects/iDunno" element={<IDunno />} />
                <Route path="/projects/manucar" element={<Manucar />} />
                <Route path="/projects/projex" element={<Projex />} />
                <Route
                  path="/projects/genshin-calendar"
                  element={<Genshin />}
                />
              </Route>
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
