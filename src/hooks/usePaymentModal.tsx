import { create } from "zustand";

interface PaymentModal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const usePaymentModal = create<PaymentModal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default usePaymentModal;
