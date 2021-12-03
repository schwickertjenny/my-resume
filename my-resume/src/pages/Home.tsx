import React from "react";
// Components
import Welcome from "../components/Welcome/Welcome";
import { NavBar } from "../components/NavBar/NavBar";
import SocialMediaMenue from "../components/SocialMediaMenu/SocialMediaMenue";


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
