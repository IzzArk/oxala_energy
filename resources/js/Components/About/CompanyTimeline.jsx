import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function CompanyTimeline() {
    const { t } = useTranslation("about");

    const history = [
        {
            year: t("about:timeline.history.2001.year"),
            text: t("timeline.history.2001.text"),
        },
        {
            year: t("about:timeline.history.2008.year"),
            text: t("timeline.history.2008.text"),
        },
        {
            year: t("about:timeline.history.2015.year"),
            text: t("timeline.history.2015.text"),
        },
        {
            year: t("about:timeline.history.2024.year"),
            text: t("about:timeline.history.2024.text"),
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="bg-[#f5f7fb] py-24"
        >
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-center text-4xl font-bold text-[#23478F] mb-16">
                    {t("about:timeline.title")}
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                    {history.map((item) => (
                        <div
                            key={item.year}
                            className="bg-white p-8 rounded-xl"
                        >
                            <h3 className="text-3xl font-bold text-[#23478F]">
                                {item.year}
                            </h3>

                            <p className="mt-3 text-gray-600">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </motion.section>
    );
}