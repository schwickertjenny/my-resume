import React from "react";
import { NavBar } from "../components/NavBar/NavBar";
import SocialMediaMenue from "../components/SocialMediaMenu/SocialMediaMenue";

export default function Projects() {
  return (
    <>
      <NavBar />
      <SocialMediaMenue />
      <main style={{ padding: "1rem 0" }}>
        <h2>Projekte</h2>
      </main>
    </>
  );
}
