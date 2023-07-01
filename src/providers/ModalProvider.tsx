import { useEffect, useState } from "react";

import PaymentModal from "@/components/PaymentModal";
import NavbarModal from "@/components/NavbarModal";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => setIsMounted(true), []);

    return (
        <>
            <PaymentModal />
            <NavbarModal />
        </>
    );
};

export default ModalProvider;
