import React from "react";
import { NavBar } from "../components/NavBar";
import SocialMediaMenue from "../components/SocialMediaMenue";

export default function About() {
  return (
    <>
      <NavBar />
      <SocialMediaMenue />
      <main style={{ padding: "1rem 0" }}>
        <h2>About</h2>
      </main>
    </>
  );
}