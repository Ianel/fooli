import { bgFormations } from "@/assets/images";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import { formations } from "@/data/formations";
import { checkStatusColor } from "@/utils/checkStatusColor";
import {
    FaCalendarAlt,
    FaCheckCircle,
    FaGlobe,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { MGA } from "@/utils/formatCurrency";
import usePaymentModal from "@/hooks/usePaymentModal";

const FormationDetails: React.FC = () => {
    const { id } = useParams();
    const [formationDetail, setFormationDetail] = useState({});
    const [localStatus, setLocalStatus] = useState("");
    const { onOpen } = usePaymentModal();

    useEffect(() => {
        let tmpFormation = formations.filter(
            (formation) => formation.id === Number(id)
        );
        setFormationDetail(tmpFormation[0]);
        setLocalStatus(checkStatusColor(tmpFormation[0]["status"]));
        console.log(tmpFormation[0]["status"]);
    }, [id]);

    return (
        <div className="flex flex-col lg:flex-row justify-evenly items-start">
            <section className="lg:w-1/2 sticky top-0 bg-blue-700">
                <LazyLoadImage src={bgFormations} />
            </section>
            <section className="lg:w-1/2 p-8">
                <p
                    className={`${localStatus} text-white px-4 py-2 rounded-md max-w-max`}
                >
                    {formationDetail.status}
                </p>
                <h2 className="font-bold text-lg my-4">
                    {formationDetail.title}
                </h2>
                <div className="flex flex-wrap justify-start items-center gap-4 my-3">
                    <h3 className="bg-zinc-800 text-white px-4 py-1 rounded-lg">
                        {formationDetail.isOnline ? "En ligne" : "Présentiel"}
                    </h3>
                    <h3 className="bg-zinc-800 text-white px-4 py-1 rounded-lg flex gap-3 items-center">
                        <span>
                            <FaCalendarAlt />
                        </span>
                        <span>{formationDetail.date}</span>
                    </h3>
                    {!formationDetail.isOnline ? (
                        <div className="bg-zinc-800 text-white px-4 py-1 rounded-lg flex items-center gap-3">
                            <span>
                                <FaMapMarkerAlt />
                            </span>{" "}
                            <span>{formationDetail.place}</span>
                        </div>
                    ) : (
                        <div className="bg-zinc-800 text-white px-4 py-1 rounded-lg flex items-center gap-3">
                            <span>
                                <FaGlobe />
                            </span>
                            <span>Google Meet</span>
                        </div>
                    )}
                </div>
                <h4 className="text-2xl font-bold text-center my-8">
                    {MGA.format(formationDetail.price)}
                </h4>
                <div className="mb-4">
                    <h5>Ce que vous saurez faire:</h5>
                    <div className="flex flex-wrap justify-between items-center">
                        {formationDetail?.syllabus &&
                            formationDetail?.syllabus.map((doc, index) => {
                                return (
                                    <div className="flex items-center gap-4">
                                        <FaCheckCircle /> <span>{doc}</span>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <button
                    onClick={onOpen}
                    className="bg-blue-500 text-white w-full rounded-lg py-2"
                >
                    Payer
                </button>
            </section>
        </div>
    );
};

export default FormationDetails;
