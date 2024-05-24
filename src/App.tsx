import "./styles/main.css";
import Navbar from "./components/nawbar/Navbar";
import Foother from "./components/foother/Foother";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";

import { BrowserRouter as Roster, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Roster>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Foother />
      </Roster>
    </div>
  );
}

export default App;
