import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="text-xl font-bold shadow-md px-8 py-2 mb-8">
            <Link to={"/"}>Fooli</Link>
        </nav>
    );
};

export default Navbar;
