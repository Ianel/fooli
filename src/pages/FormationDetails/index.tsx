import { bgFormations } from "@/assets/images";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import { formations } from "@/data/formations";
import { formatString } from "@/utils/formatString";
import primaryStates from "@/states";

const FormationDetails: React.FC = () => {
    const { id } = useParams();
    const [formationDetail, setFormationDetail] = useState({});

    useEffect(() => {
        let tmpFormation = formations.filter(
            (formation) => formation.id === Number(id)
        );
        setFormationDetail(tmpFormation[0]);
    }, [id]);

    return (
        <div className="flex justify-evenly items-start">
            <section className="w-1/2 sticky top-0 bg-blue-700">
                <LazyLoadImage src={bgFormations} />
            </section>
            <section className="w-1/2 px-8">
                <p
                    className={`${primaryStates.statusColor} text-white px-4 py-2 rounded-md max-w-max`}
                >
                    {formationDetail && formatString(formationDetail.title)}
                </p>
                <h2 className="font-bold text-lg my-4">
                    {formationDetail.title}
                </h2>
            </section>
        </div>
    );
};

export default FormationDetails;
