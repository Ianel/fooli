import { bgHero } from "@/assets/images";
import { IHero } from "@/interfaces/hero";
import React from "react";

const Hero: React.FC<IHero> = ({ image, altText, children }) => {
    return (
        <div className="h-64 relative z-40 flex flex-col justify-center items-center rounded-lg ">
            <img
                className="absolute top-0 left-0 z-10 rounded-lg h-full w-full"
                src={image}
                alt={altText}
            />
            <div className="absolute top-0 left-0 z-30 w-full h-full bg-gray-200 bg-clip-padding backdrop-blur-sm backdrop-filter bg-opacity-10 border-2 border-white rounded-lg"></div>
            {children}
        </div>
    );
};

export default Hero;
