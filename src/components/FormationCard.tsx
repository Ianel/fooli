import { IFormation } from "@/interfaces/formation";
import { checkStatusColor } from "@/utils/checkStatusColor";
import React, { useEffect, useState } from "react";
import {
    FaCalendarAlt,
    FaCheckCircle,
    FaGlobe,
    FaMapMarkerAlt,
} from "react-icons/fa/index";
import primaryStates from "@/states";

const FormationCard: React.FC<IFormation> = ({
    title,
    isOnline,
    date,
    place,
    status,
    price,
    syllabus,
}) => {
    let MGA = new Intl.NumberFormat("mg", {
        style: "currency",
        currency: "MGA",
    });
    const [localStatus, setLocalStatus] = useState("");

    useEffect(() => {
        setLocalStatus(checkStatusColor(status));
    }, []);

    return (
        <section className="shadow-md p-8 w-[350px] rounded-lg">
            <div className="flex justify-between">
                <div className="flex gap-4 items-start">
                    <div className={`w-1 ${localStatus}`}>&nbsp;</div>
                    <div className={`w-1 ${localStatus}`}>&nbsp;</div>
                    <div className={`w-1 ${localStatus}`}>&nbsp;</div>
                </div>
                <div
                    className={`${localStatus} text-white px-4 py-2 rounded-lg`}
                >
                    <p>{status[0].toUpperCase() + status.slice(1)}</p>
                </div>
            </div>
            <h2 className="font-bold text-2xl my-4">{title}</h2>
            <div className="flex justify-between items-center my-3">
                <h3 className="bg-zinc-800 text-white px-4 py-1 rounded-lg">
                    {isOnline ? "En ligne" : "Présentiel"}
                </h3>
                <h3 className="flex gap-3 items-center">
                    <span>
                        <FaCalendarAlt />
                    </span>
                    <span>{date}</span>
                </h3>
            </div>
            {!isOnline ? (
                <div className="flex items-center gap-3">
                    <span>
                        <FaMapMarkerAlt />
                    </span>{" "}
                    <span>{place}</span>
                </div>
            ) : (
                <div className="flex items-center gap-3">
                    <span>
                        <FaGlobe />
                    </span>
                    <span>Google Meet</span>
                </div>
            )}
            <h4 className="text-2xl font-bold text-center my-8">
                {MGA.format(price)}
            </h4>
            <div className="mb-4">
                <h5>Ce que vous saurez faire:</h5>
                <div>
                    {syllabus.map((doc, index) => {
                        return (
                            <div className="flex items-center gap-4">
                                <FaCheckCircle /> <span>{doc}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-col justify-between items-center gap-4 mt-2">
                <button className="bg-black text-white w-full rounded-lg py-2">
                    Voir détails
                </button>
                <button className="bg-blue-500 text-white w-full rounded-lg py-2">
                    Payer
                </button>
            </div>
        </section>
    );
};

export default FormationCard;
