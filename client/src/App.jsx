import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<div>Services</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
