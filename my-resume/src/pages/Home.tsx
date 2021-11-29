import React from "react";
// Components
import Welcome from "../components/Welcome";
import { NavBar } from "../components/NavBar";
import SocialMediaMenue from "../components/SocialMediaMenue";


function Home() {
  return (
    <>
      <NavBar />
      <Welcome />
      <SocialMediaMenue />
    </>
  );
}

export default Home;
