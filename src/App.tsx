import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  AboutPage,
  ProjectPage,
  WorkPage,
  ContactPage,
} from "./services/pages";
import { Navbar } from "./services/components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
