import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { FileSearch, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";


export default function InformationCTA() {
    const { t } = useTranslation("information");
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
            className="relative py-24 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-[#23478F]" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#23478F] via-[#2F5DB4] to-[#23478F] opacity-90" />

            <div className="relative max-w-5xl mx-auto px-6 text-center text-white">

                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur mb-8">
                    <FileSearch size={38} />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold">
                    {t("information:cta.title")}
                    <span className="block text-[#B6C95C]">
                        {t("information:cta.highlight")}
                    </span>
                </h2>

                <p className="mt-6 text-blue-100 text-lg leading-8 max-w-3xl mx-auto">
                    {t("information:cta.description")}
                </p>

                <div className="mt-10">
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
                            {t("information:cta.button")}
                        </button>
                    </Link>
                </div>

            </div>
        </motion.section>
    );
}