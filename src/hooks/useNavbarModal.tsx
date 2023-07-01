import { create } from "zustand";

interface NavbarModal {
    isNavbarOpen: boolean;
    onNavbarOpen: () => void;
    onNavbarClose: () => void;
}

const useNavbarModal = create<NavbarModal>((set) => ({
    isNavbarOpen: false,
    onNavbarOpen: () => set({ isNavbarOpen: true }),
    onNavbarClose: () => set({ isNavbarOpen: false }),
}));

export default useNavbarModal;
