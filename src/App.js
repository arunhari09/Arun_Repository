import React from 'react';
//import Header from "./Components/Header";
import { Routes, Route } from 'react-router-dom';

import Certificates from "./Components/Certificates";
import Resume from "./Components/Resume";
//import Footer from "./Components/Footer";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Home from "./Components/Home";





function App() {
  return (
    <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/certificates" element={<Certificates />} />
         <Route path="/about" element={<About />} />
         <Route path="/resume" element={<Resume />} />
       </Routes>
  );
}

export default App;
