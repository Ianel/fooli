import FormationCard from "@/components/FormationCard";
import React from "react";
import { formations } from "@/data/formations";
import { IFormation } from "@/interfaces/formation";
import { bgHero } from "@/assets/images";

const HomePage: React.FC = () => {
    return (
        <div className="h-64 relative z-40 flex flex-col justify-center items-center rounded-lg ">
            <img
                className="absolute top-0 left-0 z-10 rounded-lg h-full w-full"
                src={bgHero}
                alt="Hero"
            />
            <div className="absolute top-0 left-0 z-30 w-full h-full bg-gray-200 bg-clip-padding backdrop-blur-sm backdrop-filter bg-opacity-10 border-2 border-white rounded-lg"></div>
            <h2 className="relative z-40 md:text-xl text-center text-white">
                Train with us ! Your brain will never be the same.
            </h2>
        </div>
    );
};

export default HomePage;
