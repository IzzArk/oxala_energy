import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ProductCTA() {
    const { t } = useTranslation("product");
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
            className="py-24 bg-[#23478F]">

            <div className="max-w-4xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold text-white">
                    {t("product:cta.title")}
                </h2>

                <p className="text-blue-100 mt-4">
                    {t("product:cta.description")}
                </p>

                <a
                    href="/hubungi-kami"
                    className="
                        inline-block
                        mt-8
                        bg-white
                        text-[#23478F]
                        px-8
                        py-3
                        rounded-lg
                        font-semibold
                    "
                >
                    {t("product:cta.button")}
                </a>

            </div>

        </motion.section>
    );
}