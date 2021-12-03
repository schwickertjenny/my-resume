import { AboutMe } from "../components/AboutMe/AboutMe";
import { NavBar } from "../components/NavBar/NavBar";
import SocialMediaMenue from "../components/SocialMediaMenu/SocialMediaMenue";

export default function About() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <SocialMediaMenue />
    </>
  );
}
