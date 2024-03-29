import { bgHero } from "@/assets/images";

export const formations = [
    {
        id: 1,
        title: "Node JS",
        subtitle: "Initiation aux microservices",
        isOnline: false,
        date: "24/04/2023",
        place: "BFV Ambanidia",
        price: 80000,
        category: "Backend",
        image: bgHero,
        syllabus: [
            "Créer des microservices avec Node JS",
            "Construire des API REST modulables",
        ],
    },
    {
        id: 2,
        title: "Golang",
        subtitle: "Introduction aux bases",
        isOnline: true,
        date: "12/05/2023",
        place: "BFV Ambanidia",
        category: "Backend",
        image: bgHero,
        price: 80000,
        syllabus: ["Variables, boucles, fonctions", "OOP"],
    },
    {
        id: 3,
        title: "React JS",
        subtitle: "Les hooks",
        isOnline: true,
        date: "28/05/2023",
        place: "myt-sqg-jik",
        category: "Frontend",
        image: bgHero,
        price: 80000,
        syllabus: ["Gestion d'états", "Effets de bord", "Cycles de vie"],
    },
];
