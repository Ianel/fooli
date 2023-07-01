import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

type PageProps = {
    children: JSX.Element;
};

const MainLayout: React.FC<PageProps> = ({ children }) => {
    return (
        <main className="bg-[#F9F9F9]">
            <Navbar />
            <div className="px-5 md:px-10">{children}</div>
            <Footer />
        </main>
    );
};

export default MainLayout;
