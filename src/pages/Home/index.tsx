import FormationCard from "@/components/FormationCard";
import React from "react";
import { formations } from "@/data/formations";
import { IFormation } from "@/interfaces/formation";
import { bgHero } from "@/assets/images";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <Courses />
        </>
    );
};

export default HomePage;
