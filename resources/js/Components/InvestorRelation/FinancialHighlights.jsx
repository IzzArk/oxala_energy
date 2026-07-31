import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function FinancialHighlights() {
    const { t } = useTranslation("investor");
    const items = [
        {
            label: t("investor:financialHighlights.items.revenue.label"),
            value: "Rp 1,25 T"
        },
        {
            label: t("investor:financialHighlights.items.profit.label"),
            value: "Rp 245 M"
        },
        {
            label: t("investor:financialHighlights.items.assets.label"),
            value: "Rp 5,8 T"
        },
        {
            label: t("investor:financialHighlights.items.equity.label"),
            value: "Rp 2,9 T"
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
            className="py-24 bg-[#F7F9FF]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-14">

                    <h2 className="text-4xl font-bold text-[#23478F]">
                        {t("investor:financialHighlights.title")}
                    </h2>

                </div>

                <div className="grid lg:grid-cols-4 gap-6">

                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="
                                bg-white
                                border
                                rounded-xl
                                p-6
                            "
                        >
                            <p className="text-gray-500">
                                {item.label}
                            </p>

                            <h3 className="text-2xl font-bold text-[#23478F] mt-2">
                                {item.value}
                            </h3>

                        </div>
                    ))}

                </div>

            </div>

        </motion.section>
    );
}