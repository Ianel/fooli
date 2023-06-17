import { useEffect, useState } from "react";

import PaymentModal from "@/components/PaymentModal";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => setIsMounted(true), []);

    return (
        <>
            <PaymentModal />
        </>
    );
};

export default ModalProvider;
