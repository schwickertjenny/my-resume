import React from "react";
import { NavBar } from "../components/NavBar";
import SocialMediaMenue from "../components/SocialMediaMenue";

export default function Contact() {
  return (
    <>
      <NavBar />
      <SocialMediaMenue />
      <main style={{ padding: "1rem 0" }}>
        <h2>Kontakt</h2>
      </main>
    </>
  );
}