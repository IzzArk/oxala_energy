import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function CompanyHighlights() {
    const { t } = useTranslation("investor");

    const stats = [
        {
            title: t("investor:companyHighlights.items.experience.title"),
            subtitle: t("investor:companyHighlights.items.experience.subtitle")
        },
        {
            title: t("investor:companyHighlights.items.projects.title"),
            subtitle: t("investor:companyHighlights.items.projects.subtitle")
        },
        {
            title: t("investor:companyHighlights.items.employees.title"),
            subtitle: t("investor:companyHighlights.items.employees.subtitle")
        },
        {
            title: t("investor:companyHighlights.items.governance.title"),
            subtitle: t("investor:companyHighlights.items.governance.subtitle")
        }
    ];

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
            className="py-24">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-4 gap-6">

                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="
                                bg-white
                                border
                                rounded-xl
                                p-8
                                text-center
                                shadow-sm
                            "
                        >
                            <h3 className="text-4xl font-bold text-[#23478F]">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-gray-600">
                                {item.subtitle}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </motion.section>
    );
}