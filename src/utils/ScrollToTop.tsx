import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

type PageProps = {
    children: JSX.Element;
};

const ScrollToTop: React.FC<PageProps> = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{children}</>;
};

export default ScrollToTop;
