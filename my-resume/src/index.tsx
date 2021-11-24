import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// Pages
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
// Styles
import { GlobalStyle } from "./app.styles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />

    <BrowserRouter>
      <Routes>
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about-me" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<main>There is nothing here!</main>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
