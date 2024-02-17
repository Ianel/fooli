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
            <Hero image={bgHero} altText="Home hero">
                <h2 className="relative px-10 z-40 md:text-xl text-center text-white">
                    Train with us ! Your brain will never be the same.
                </h2>
            </Hero>
            <Courses />
        </>
    );
};

export default HomePage;
