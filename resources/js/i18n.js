import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

/* Indonesia */
import commonId from "./locales/id/common.json";
import homeId from "./locales/id/home.json";
import aboutId from "./locales/id/about.json";
import investorId from "./locales/id/investor.json";
import informationId from "./locales/id/information.json";
import productId from "./locales/id/product.json";
import newsId from "./locales/id/news.json";
import contactId from "./locales/id/contact.json";


/* English */
import commonEn from "./locales/en/common.json";
import homeEn from "./locales/en/home.json";
import aboutEn from "./locales/en/about.json";
import investorEn from "./locales/en/investor.json";
import informationEn from "./locales/en/information.json";
import productEn from "./locales/en/product.json";
import newsEn from "./locales/en/news.json";
import contactEn from "./locales/en/contact.json";


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            id: {
                common: commonId,
                home: homeId,
                about: aboutId,
                investor: investorId,
                information: informationId,
                product: productId,
                news: newsId,
                contact: contactId,


            },

            en: {
                common: commonEn,
                home: homeEn,
                about: aboutEn,
                investor: investorEn,
                information: informationEn,
                product: productEn,
                news: newsEn,
                contact: contactEn,


            },
        },

        fallbackLng: "id",

        defaultNS: "common",

        ns: [
            "common",
            "home",
            "about",
            "investor",
            "news",
            "contact",


        ],

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;