import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AboutCTA() {
    const { t } = useTranslation("about");
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
            className="py-24 bg-[#23478F] text-white">

            <div className="max-w-5xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold">
                    {t("about:cta.title")}
                </h2>

                <p className="mt-6 text-blue-100">
                    {t("about:cta.description")}
                </p>

                <Link
                    href="/hubungi-kami">
                    <button
                        className="
                        mt-8
                        bg-white
                        text-[#23478F]
                        px-8
                        py-4
                        rounded-lg
                        font-semibold
                        hover:bg-[#dadada]
                    "
                    >
                        {t("about:cta.button")}
                    </button>
                </Link>
            </div>

        </motion.section>
    );
}