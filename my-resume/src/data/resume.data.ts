// Pictures
import profilePic from "../images/profile-picture.jpg";

// General
export type dataElem = {
  label: string;
  value: string;
};

export type skills = {
  categoryTitle: string;
  categoryData: dataElem[];
};

// Persona | About me
export type Persona = {
  firstName: string;
  sureName: string;
  age: number;
  profilePic: string;
  aboutMe: string;
  hobbies: dataElem[] | undefined;
  categories: skills[];
};

export const personaData: Persona = {
  firstName: "Jenny",
  sureName: "Schwickert",
  age: 23,
  profilePic: profilePic,
  aboutMe:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  hobbies: [
    {
      label: "Bouldern",
      value: "Bouldern gehen",
    },
    {
      label: "Fotografie",
      value: "Fotofrafieren gehen",
    },
  ],
  categories: [
    {
      categoryTitle: "Kontakt",
      categoryData: [
        {
          label: "E-Mail",
          value: "hello@noob.com",
        },
        {
          label: "Telefon",
          value: "0815 / 12345678",
        },
      ],
    },
    {
      categoryTitle: "Sprachen",
      categoryData: [
        {
          label: "Deutsch",
          value: "Muttersprache",
        },
        {
          label: "Englisch",
          value: "verhandlungssicher",
        },
      ],
    },
    {
      categoryTitle: "Hard Skills",
      categoryData: [
        {
          label: "IT Projekt Management",
          value: "",
        },
        {
          label: "SCRUM",
          value: "",
        },
        {
          label: "Web Development & Design",
          value: "<3",
        },
      ],
    },
    {
      categoryTitle: "Soft Skills",
      categoryData: [
        {
          label: "Analytisches Denken",
          value: "",
        },
        {
          label: "Problemlösung",
          value: "",
        },
        {
          label: "Kommunikation",
          value: "",
        },
        {
          label: "Menschenkenntnis",
          value: "",
        },
        {
          label: "Kritikfähigkeit",
          value: "",
        },
      ],
    },
  ],
};

// About me: experience
export type Experience = {
  duration: string;
  company: string;
  position: string;
  tasks: dataElem[];
};
export type ExperienceType = {
  experienceType: string;
  experienceData: Experience[];
};
export type ExperienceGroup = {
  experienceElem: ExperienceType[];
};

export const ExperienceSummary: ExperienceGroup = {
  experienceElem: [
    {
      experienceType: "Berufserfahrung",
      experienceData: [
        {
          duration: "August 2019 – Heute",
          company: "heureka e-business GmbH",
          position: "IT Project Manager & Scrum Master",
          tasks: [
            { label: "IT Projekt Management", value: "Lorem Ipsum" },
            { label: "Scrum Master", value: "Lorem Ipsum" },
          ],
        },
        {
          duration: "September 2017 – August 2019",
          company: "heureka e-business GmbH",
          position: "Ausbildung zum Fachinformatiker für Anwendungsentwicklung",
          tasks: [
            { label: "Entwicklung Webseiten", value: "Lorem Ipsum" },
            { label: "Schnittstellen", value: "Lorem Ipsum" },
            { label: "Projektkoordination", value: "Lorem Ipsum" },
          ],
        },
        {
          duration: "September 2016 –  August 2017",
          company: "Arlt Computer-Produkte GmbH",
          position: "Frontend Web Developer",
          tasks: [
            { label: "Web Development", value: "Lorem Ipsum" },
            { label: "Datenpflege", value: "Lorem Ipsum" },
          ],
        },
      ],
    },
    {
      experienceType: "Bildung",
      experienceData: [
        {
          duration: "September 2019 - März 2022",
          company: "IHK Stuttgart",
          position: "Operative Professional - IT Business Manager",
          tasks: [
            { label: "IT Projekt Management", value: "Lorem Ipsum" },
            {
              label: "Ausbildereignungsverordnung (AEVO)",
              value: "Lorem Ipsum",
            },
          ],
        },
        {
          duration: "September 2017 – August 2019",
          company: "heureka e-business GmbH",
          position: "Ausbildung zum Fachinformatiker für Anwendungsentwicklung",
          tasks: [
            { label: "Entwicklung Webseiten", value: "Lorem Ipsum" },
            { label: "Schnittstellen", value: "Lorem Ipsum" },
            { label: "Projektkoordination", value: "Lorem Ipsum" },
          ],
        },
        {
          duration: "2014 – 2016",
          company: "Gottlieb-Daimler-Schule II",
          position: "Fachhochschulreife: Informations- und Kommunikations Assistent",
          tasks: [
            { label: "Entwicklung", value: "Lorem Ipsum" },
          ],
        },
      ],
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
