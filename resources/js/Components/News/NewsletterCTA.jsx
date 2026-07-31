import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function NewsletterCTA() {
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
            className="bg-[#23478F] py-20">

            <div className="max-w-4xl mx-auto px-6 text-center text-white">

                <h2 className="text-4xl font-bold">
                    {t("news:cta.title")}
                </h2>

                <p className="mt-4 text-blue-100">
                    {t("news:cta.description")}
                </p>

            </div>

        </motion.section>
    );
}