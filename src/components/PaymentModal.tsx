import usePaymentModal from "@/hooks/usePaymentModal";
import Modal from "./Modal";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const PaymentModal = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const { onClose, isOpen } = usePaymentModal();

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    return (
        <Modal
            title="Fooli Pay"
            description="Instructions pour le paiement"
            isOpen={isOpen}
            onChange={onChange}
        >
            <div>
                <p>
                    Veuillez effectuer un transfert Orange Money vers ce numéro:{" "}
                </p>
                <p className="text-center text-xl font-bold my-6">
                    032 95 953 68
                </p>
            </div>
            <label>
                Veuillez entrer le numéro depuis lequel vous faîtes le
                transfert:
                <br />
                <input
                    className="w-full rounded-md py-2 px-4 outline-dotted my-6 outline-neutral-800"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </label>
            <div>
                <p>
                    Une fois la transaction terminée, apuyez le bouton
                    ci-dessous
                </p>
                <button
                    disabled={phoneNumber.length != 10}
                    onClick={() => {}}
                    className={`${
                        phoneNumber.length == 10 ? "bg-blue-500" : "bg-zinc-400"
                    } w-full py-2 my-3 rounded-md text-white gap-x-2 mx-auto flex items-center justify-center`}
                >
                    <span>
                        <FaCheckCircle />
                    </span>
                    <span>J'ai effectué le transfert</span>
                </button>
            </div>
        </Modal>
    );
};

export default PaymentModal;
