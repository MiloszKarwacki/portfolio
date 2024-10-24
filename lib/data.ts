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
        title: "First App",
        description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maxime aperiam recusandae nemo incidunt iusto reiciendis consequuntur maiores suscipit!",
        tags: ["React", "Nextjs", "MongoDB", "Tailwind","NodeJS"],
        imageUrl: "/image1.png",
        link: "https://www.google.com",
    },
    {
        title: "Second App",
        description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maxime aperiam recusandae nemo incidunt iusto reiciendis consequuntur maiores suscipit!",
        tags: ["React", "Nextjs", "MongoDB", "Tailwind","NodeJS"],
        imageUrl: "/image2.png",
        link: "https://www.google.com",
    },
    {
        title: "Third App",
        description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maxime aperiam recusandae nemo incidunt iusto reiciendis consequuntur maiores suscipit!",
        tags: ["React", "Nextjs", "MongoDB", "Tailwind","NodeJS"],
        imageUrl: "/image3.png",
        link: "https://www.google.com",
    },
    {
        title: "Fourth Theme",
        description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur maxime aperiam recusandae nemo incidunt iusto reiciendis consequuntur maiores suscipit!",
        tags: ["React", "Nextjs", "MongoDB", "Tailwind","NodeJS"],
        imageUrl: "/image4.png",
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