import useNavbarModal from "@/hooks/useNavbarModal";
import React from "react";
import {
    FaBars,
    FaHome,
    FaPersonBooth,
    FaPhoneAlt,
    FaTimes,
} from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const { onNavbarOpen } = useNavbarModal();

    return (
        <nav className="flex justify-between items-center md:px-10 px-5  py-4">
            <div className="flex items-center gap-2">
                <img className="w-8 h-8" src="/logo.png" alt="Logo Fooli" />
                <Link to={"/"}>
                    <h1 className="font-bold">Fooli</h1>
                </Link>
            </div>
            <div className="hidden text-sm lg:flex justify-between items-center gap-6">
                <Link
                    to={"/"}
                    className="cursor-pointer hover:font-semibold hover:text-pink-700 flex items-center gap-2"
                >
                    <span>
                        <FaHome />
                    </span>
                    <span>Accueil</span>
                </Link>
                <Link
                    to={"/about"}
                    className="cursor-pointer hover:font-semibold hover:text-pink-700 flex items-center gap-2"
                >
                    <span>
                        <IoMdPerson />
                    </span>
                    <span>A propos</span>
                </Link>
                <Link
                    to={"/contact"}
                    className="cursor-pointer hover:font-semibold hover:text-pink-700 flex items-center gap-2"
                >
                    <span>
                        <FaPhoneAlt />
                    </span>
                    <span>Contact</span>
                </Link>
            </div>
            <button className="block lg:hidden" onClick={onNavbarOpen}>
                <FaBars />
            </button>
        </nav>
    );
};

export default Navbar;
