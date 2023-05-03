import Navbar from "@/components/Navbar";
import React from "react";

type PageProps = {
    children: JSX.Element;
};

const MainLayout: React.FC<PageProps> = ({ children }) => {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    );
};

export default MainLayout;
