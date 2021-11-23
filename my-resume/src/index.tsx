import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
// Pages
import About from "./pages/about";
import Projects from "./pages/projects";
// Styles
import { GlobalStyle } from "./app.styles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />

    <BrowserRouter>
      <Routes>
        <Route path="projects" element={<Projects />} />
        <Route path="about-me" element={<About />} />
        <Route path="home" element={<App />} />
        <Route path="*" element={<main>There is nothing here!</main>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
