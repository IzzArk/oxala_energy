import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function CTASection() {
    const { t } = useTranslation("home");
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
            className="bg-[#f5f7fb] py-24">

            <div className="max-w-7xl mx-auto px-6">

                <div
                    className="
                        bg-[#23478F]
                        rounded-xl
                        py-20
                        px-10
                        text-center
                        text-white
                    "
                >

                    <h2 className="text-4xl font-bold mb-6">
                        {t("home:cta.title")}
                    </h2>

                    <p className="max-w-3xl mx-auto text-blue-100">
                        {t("home:cta.description")}.
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
                            {t("home:cta.button")}
                        </button>
                    </Link>
                </div>

            </div>

        </motion.section>
    );
}