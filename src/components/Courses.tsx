import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CourseCard from "./CourseCard";
import { formations } from "@/data/formations";
import { FaFilter, FaSlidersH } from "react-icons/fa";

const Courses = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [selectCategory, setSelectCategory] = useState("Frontend");

    useEffect(() => {
        setSelectCategory("Frontend");
    }, []);

    return (
        <div className="my-5">
            <div className="relative flex justify-between items-centers">
                <h2 className="text-xl font-bold">Our Courses (3)</h2>
                <button onClick={() => setShowFilters(!showFilters)}>
                    <FaSlidersH />
                </button>
                {showFilters && (
                    <div
                        className={`
                    bg-pink-100 w-48 absolute right-0 top-10 rounded-md px-4 py-2`}
                    >
                        <div className="flex gap-3">
                            <input
                                type="radio"
                                name="category"
                                value={selectCategory}
                                onChange={() => setSelectCategory("Frontend")}
                                checked={selectCategory === "Frontend"}
                            />
                            <span>Frontend</span>
                        </div>
                        <div className="flex gap-3">
                            <input
                                type="radio"
                                name="category"
                                value={selectCategory}
                                onChange={() => setSelectCategory("Backend")}
                                checked={selectCategory === "Backend"}
                            />
                            <span>Backend</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex flex-col md:flex-row md:justify-start w-full justify-between gap-4 my-4">
                {formations
                    .filter((formation) => {
                        return formation.category === selectCategory;
                    })
                    .map((course) => {
                        let id = uuidv4();
                        return (
                            <CourseCard
                                key={id}
                                status="upcoming"
                                {...course}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default Courses;
