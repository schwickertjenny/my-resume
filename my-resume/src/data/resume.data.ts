// Pictures
import profilePic from "../images/profile-picture.jpg";

// General
export type dataElem = {
  label: string;
  value: string;
};

// Persona | About me
export type Persona = {
  firstName: string;
  sureName: string;
  age: number;
  profilePic: string;
  hobbies: dataElem[] | undefined;
  skills: dataElem[] | undefined;
};

export const personaData: Persona = {
  firstName: "Jenny",
  sureName: "Schwickert",
  age: 23,
  profilePic: profilePic,
  hobbies: [
    {
      label: "Bouldern",
      value: "Bouldern gehen",
    },
    {
      label: "Fotografie",
      value: "Fotofrafieren gehen",
    },
    {
      label: "Zocken",
      value: "Zocken gehen",
    },
  ],
  skills: [
    {
      label: "Projekt-Management",
      value: "Operative Professional - IT Business Manager",
    },
    {
      label: "HTML5",
      value: "",
    },
    {
      label: "CSS3",
      value: "",
    },
  ],
};

// Welcome
export type Welcome = {
  hello: string;
  profession: string;
};

export const welcomePage: Welcome = {
  hello:
    "Hallo, mein Name ist " +
    personaData.firstName +
    " " +
    personaData.sureName +
    ".",
  profession:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
};

// NavBar Links
export const NavBarLinks: dataElem[] = [
  {
    label: "Home",
    value: "/",
  },
  {
    label: "Über mich",
    value: "/about-me",
  },
  {
    label: "Projekte",
    value: "/projects",
  },
  {
    label: "Kontakt",
    value: "/contact",
  },
  {
    label: "Download CV",
    value: "/download-cv",
  },
];

// Social Media Links
export type SocialMedia = {
  name: string;
  fontAwesomeIconCode: string;
  linkToWebpage: string | undefined;
  value: string | undefined;
};

export const SocialMediaLinks: SocialMedia[] = [
  {
    name: "LinkedIn",
    fontAwesomeIconCode: "FaLinkedin",
    linkToWebpage: "https://www.linkedin.com/in/jenny-schwickert-5642a31b3/",
    value: "",
  },
  {
    name: "Xing",
    fontAwesomeIconCode: "FaXingSquare",
    linkToWebpage: "https://www.xing.com/profile/Jenny_Schwickert/cv",
    value: "",
  },
  {
    name: "GitHub",
    fontAwesomeIconCode: "FaGitHub",
    linkToWebpage: "https://github.com/schwickertjenny",
    value: "",
  },
  {
    name: "E-Mail",
    fontAwesomeIconCode: "FaEnvelope",
    linkToWebpage:
      "mailto:schwickertjenny@gmail.com?subject=Kontakt über die Webseite",
    value: "",
  },
];
