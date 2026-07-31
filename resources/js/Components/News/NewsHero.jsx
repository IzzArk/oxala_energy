import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function NewsHero() {
    const { t } = useTranslation("news");
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
            className="bg-[#23478F] py-24 text-white">

            <div className="max-w-7xl mx-auto px-6 text-center">

                <span className="uppercase tracking-widest">
                    {t("news:hero.badge")}
                </span>

                <h1 className="text-5xl font-bold mt-4">
                    {t("news:hero.title")}
                </h1>

                <p className="max-w-2xl mx-auto mt-4 text-blue-100">
                    {t("news:hero.description")}
                </p>

            </div>

        </motion.section>
    );
}