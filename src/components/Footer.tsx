import React from "react";
import { FaEnvelope, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="flex justify-between items-center px-5 md:px-10 py-4">
            <p>
                &copy; Copyright {new Date(Date.now()).getFullYear()} - Tous
                droits réservés
            </p>
            <div className="flex items-center gap-4">
                <FaFacebook />
                <FaEnvelope />
            </div>
        </footer>
    );
};

export default Footer;
