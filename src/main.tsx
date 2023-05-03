import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ScrollToTop } from "./utils";
import "./translations/i18n";
import MainLayout from "./layouts/MainLayout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <ScrollToTop>
                <MainLayout>
                    <App />
                </MainLayout>
            </ScrollToTop>
        </Router>
    </React.StrictMode>
);
