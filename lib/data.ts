import { Link, ProjectInfo } from "./types"

export const links: Link[] = [
    {
        nameEng: "Home",
        hash: '#home',
    },
    {
        nameEng: "About",
        hash: '#about',
    },{
        nameEng: "Projects",
        hash: '#projects',
    },{
        nameEng: "Skills",
        hash: '#skills',
    },{
        nameEng: "Contact",
        hash: '#contact',
    },
]

export const projectsData: ProjectInfo[] = [
    {
        translationKey: "app1",
        imageUrl: "/image1.png",
        tags: ["React", "Nextjs", "MongoDB", "Tailwind", "NodeJS"],
        link: "https://www.google.com",
    },
    {
        translationKey: "app2",
        imageUrl: "/image2.png",
        tags: ["React", "Nextjs", "MongoDB", "Tailwind", "NodeJS"],
        link: "https://www.google.com",
    },
    {
        translationKey: "app3",
        imageUrl: "/image3.png",
        tags: ["React", "Nextjs", "MongoDB", "Tailwind", "NodeJS"],
        link: "https://www.google.com",
    },
    {
        translationKey: "app4",
        imageUrl: "/image4.png",
        tags: ["React", "Nextjs", "MongoDB", "Tailwind", "NodeJS"],
        link: "https://www.google.com",
    }
];

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Express",
    "Framer Motion",
    "Python",
    "Django",
    "Java",
]