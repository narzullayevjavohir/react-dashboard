import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";
import About from "pages/About";
import Blog from "pages/Blog";
import Contact from "pages/Contact";
import Sidebar from "components/Sidebar";

const App = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const closeSide = () => {
    setActive(false);
  };
  return (
    <div className="App">
      <div className="flex">
        <Sidebar active={active} closeSide={closeSide} />
        <div className="w-full h-full flex flex-col">
          <Header active={active} handleClick={handleClick} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
