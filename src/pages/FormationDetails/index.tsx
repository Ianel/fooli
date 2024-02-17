import { bgFormations, bgHero } from "@/assets/images";
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
import Hero from "@/components/Hero";

const FormationDetails: React.FC = () => {
    const { id } = useParams();
    const [formationDetail, setFormationDetail] = useState<any>({});
    const [localStatus, setLocalStatus] = useState("");
    const { onOpen } = usePaymentModal();

    useEffect(() => {
        let tmpFormation = formations.filter(
            (formation) => formation.id === Number(id)
        );
        setFormationDetail(tmpFormation[0]);
        // @ts-ignore
        setLocalStatus(checkStatusColor(tmpFormation[0]["status"]));
    }, [id]);

    return (
        <>
            <Hero image={formationDetail["image"]} altText="Hero for formation">
                <h2 className="relative px-10 z-40 md:text-xl text-center text-white">
                    {formationDetail["title"]}
                </h2>
            </Hero>
            <div className="flex flex-col lg:flex-row justify-evenly items-start">
                <button
                    onClick={onOpen}
                    className="bg-pink-600 text-white w-full rounded-lg py-2"
                >
                    Payer
                </button>
            </div>
        </>
    );
};

export default FormationDetails;
