import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function InformationOverview() {
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
            className="py-24 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}

                    <div>

                        <span
                            className="
                                inline-block
                                bg-[#EEF4D7]
                                text-[#7A9433]
                                px-4
                                py-2
                                rounded-full
                                text-sm
                                font-semibold
                                mb-5
                            "
                        >
                            {t("information:overview.badge")}
                        </span>

                        <h2 className="text-4xl font-bold text-[#23478F] mb-6">
                            {t("information:overview.title")}
                        </h2>

                        <p className="text-gray-600 leading-8">
                            {t("information:overview.description1")}
                        </p>

                        <p className="text-gray-600 leading-8 mt-6">
                            {t("information:overview.description2")}
                        </p>

                    </div>

                    {/* Image */}

                    <div>

                        <img
                            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
                            alt="Information Disclosure"
                            className="
                                w-full
                                h-[500px]
                                object-cover
                                rounded-2xl
                                shadow-xl
                            "
                        />

                    </div>

                </div>

            </div>
        </motion.section>
    );
}