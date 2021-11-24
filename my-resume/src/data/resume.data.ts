// Pictures
import profilePic from '../images/profile-picture.jpg';

// General
export type dataElem = {
	label: string,
	value: string
}

// Persona | About me
export type Persona = {
	firstName: string,
	sureName: string,
    age: number,
    profilePic: string,
    hobbies: dataElem[] | undefined,
    skills: dataElem[] | undefined,
}

export const personaData: Persona = {
	firstName: "Jenny",
    sureName: "Schwickert",
    age: 23,
    profilePic: profilePic,
    hobbies: [
        {
            label: "Bouldern",
            value: "Bouldern gehen"
        },
        {
            label: "Fotografie",
            value: "Fotofrafieren gehen"
        },
        {
            label: "Zocken",
            value: "Zocken gehen"
        }
    ],
    skills: [
        {
            label: "Projekt-Management",
            value: "Operative Professional - IT Business Manager"
        },
        {
            label: "HTML5",
            value: ""
        },
        {
            label: "CSS3",
            value: ""
        },
    ]

}

// Welcome
export type Welcome = {
	hello: string,
	profession: string,
}

export const welcomePage: Welcome = {
    hello: "Hallo, mein Name ist " + personaData.firstName + " " + personaData.sureName + ".",
    profession: "Ich bin ein Baum.",
}

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
]