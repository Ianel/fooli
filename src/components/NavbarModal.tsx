import usePaymentModal from "@/hooks/usePaymentModal";
import Modal from "./Modal";
import { useState } from "react";
import { FaCheckCircle, FaHome, FaPhoneAlt } from "react-icons/fa";
import useNavbarModal from "@/hooks/useNavbarModal";
import Navbar from "./Navbar";
import { IoMdPerson } from "react-icons/io";

const NavbarModal = () => {
    const { onNavbarClose, isNavbarOpen } = useNavbarModal();

    const onChange = (open: boolean) => {
        if (!open) {
            onNavbarClose();
        }
    };

    return (
        <Modal isOpen={isNavbarOpen} onChange={onChange} type="Menu">
            <div className="h-screen flex flex-col justify-center items-center gap-6">
                <div className="cursor-pointer hover:font-semibold hover:text-pink-700 flex items-center gap-2">
                    <span>
                        <FaHome />
                    </span>
                    <span>Accueil</span>
                </div>
                <div className="cursor-pointer hover:font-semibold hover:text-pink-700 flex items-center gap-2">
                    <span>
                        <IoMdPerson />
                    </span>
                    <span>A propos</span>
                </div>
                <div className="cursor-pointer hover:font-semibold hover:text-pink-700 flex items-center gap-2">
                    <span>
                        <FaPhoneAlt />
                    </span>
                    <span>Contact</span>
                </div>
            </div>
        </Modal>
    );
};

export default NavbarModal;
