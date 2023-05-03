import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationFr from "./fr.json";
import translationEn from "./en.json";

const resources = {
    fr: {
        translation: translationFr,
    },
    en: {
        translation: translationEn,
    },
};

i18next.use(initReactI18next).init({
    resources: resources,
    lng: "fr",
});

export default i18next;
