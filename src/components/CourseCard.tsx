import { IFormation } from "@/interfaces/formation";
import { MGA } from "@/utils/formatCurrency";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CourseCard: React.FC<IFormation> = ({
    title,
    subtitle,
    price,
    syllabus,
    id,
}) => {
    const navigate = useNavigate();

    return (
        <div className="p-4 flex flex-col justify-between rounded-lg shadow-lg md:w-[350px]">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <h4 className="text-gray-600">{subtitle}</h4>
            <p className="text-center font-semibold my-2">
                {MGA.format(price)}
            </p>
            <ul className="mb-2">
                {syllabus.map((content) => {
                    let id = uuidv4();

                    return (
                        <li key={id} className="flex items-center gap-2">
                            <span>
                                <FaCheckCircle />
                            </span>
                            <span>{content}</span>
                        </li>
                    );
                })}
            </ul>
            <button
                className="text-white rounded-md bg-pink-600 w-full py-1"
                onClick={() => navigate(`/formation/${id}`)}
            >
                Voir plus
            </button>
        </div>
    );
};

export default CourseCard;
