import FormationCard from "@/components/FormationCard";
import React from "react";
import { formations } from "@/data/formations";
import { IFormation } from "@/interfaces/formation";

const HomePage: React.FC = () => {
    return (
        <div className="lg:w-3/4 mx-auto flex justify-evenly items-stretch gao-4 flex-wrap">
            {formations.map((formation: IFormation, index) => {
                return <FormationCard {...formation} />;
            })}
        </div>
    );
};

export default HomePage;
