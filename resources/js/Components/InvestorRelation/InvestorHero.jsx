import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function InvestorHero() {
    const { t } = useTranslation("investor");
    return (
        <motion.section
            initial={{
                opacity: 0,
                y: 60,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.8,
            }}
            className="bg-[#23478F] text-white py-24">

            <div className="max-w-7xl mx-auto px-6 text-center">

                <span className="uppercase tracking-widest text-blue-200">
                    {t("investor:hero.badge")}
                </span>

                <h1 className="text-4xl md:text-6xl font-bold mt-4">
                    {t("investor:hero.title")}
                </h1>

                <p className="max-w-3xl mx-auto mt-6 text-blue-100">
                    {t("investor:hero.description")}
                </p>

            </div>

        </motion.section>
    );
}