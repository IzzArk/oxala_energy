import { motion } from "framer-motion";
import {
    Banknote,
    TrendingUp,
    Landmark,
    Wallet,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FinancialHighlights() {
    const { t } = useTranslation("investor");

    const items = [
        {
            icon: Banknote,
            label: t("investor:financialHighlights.items.revenue.label"),
            value: t("investor:financialHighlights.items.revenue.value"),
        },
        {
            icon: TrendingUp,
            label: t("investor:financialHighlights.items.profit.label"),
            value: t("investor:financialHighlights.items.profit.value"),
        },
        {
            icon: Landmark,
            label: t("investor:financialHighlights.items.assets.label"),
            value: t("investor:financialHighlights.items.assets.value"),
        },
        {
            icon: Wallet,
            label: t("investor:financialHighlights.items.equity.label"),
            value: t("investor:financialHighlights.items.equity.value"),
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="py-24 bg-[#F7F9FF]"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2
                        className="
                            mt-5
                            text-4xl
                            font-bold
                            text-[#23478F]
                        "
                    >
                        {t("investor:financialHighlights.title")}
                    </h2>

                    <div className="w-24 h-1 bg-[#B6C95C] rounded-full mx-auto mt-5" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">

                    {items.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div
                                key={index}
                                whileHover={{ y: -8 }}
                                transition={{ duration: .25 }}
                                className="
                                    group
                                    bg-white
                                    rounded-2xl
                                    border
                                    border-gray-100
                                    shadow-sm
                                    hover:shadow-xl
                                    overflow-hidden
                                "
                            >

                                <div className="h-1 bg-[#B6C95C]" />

                                <div className="p-8">

                                    <div
                                        className="
                                            w-14
                                            h-14
                                            rounded-xl
                                            bg-[#EEF4D7]
                                            flex
                                            items-center
                                            justify-center
                                            mb-6
                                        "
                                    >

                                        <Icon
                                            size={28}
                                            className="
                                                text-[#7A9433]
                                                group-hover:scale-110
                                                transition
                                            "
                                        />

                                    </div>

                                    <h3
                                        className="
                                            text-4xl
                                            font-bold
                                            text-[#23478F]
                                            leading-none
                                        "
                                    >
                                        {item.value}
                                    </h3>

                                    <p
                                        className="
                                            mt-4
                                            text-gray-600
                                            leading-7
                                        "
                                    >
                                        {item.label}
                                    </p>

                                </div>

                            </motion.div>

                        );

                    })}

                </div>

                <div
                    className="
                        mt-10
                        rounded-2xl
                        border
                        border-[#D9E7A7]
                        bg-[#F8FBEF]
                        px-6
                        py-5
                    "
                >
                    <p className="text-sm text-gray-600 leading-7">
                        {t("investor:financialHighlights.informationNote")}
                    </p>
                </div>

            </div>
        </motion.section>
    );
}