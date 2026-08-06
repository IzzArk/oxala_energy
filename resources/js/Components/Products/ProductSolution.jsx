import { motion } from "framer-motion";
import {
    TrendingUp,
    Landmark,
    Settings2,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ProductSolutions() {

    const { t } = useTranslation("product");

    const solutions = [
        {
            icon: TrendingUp,
            title: t("product:solutions.items.trading.title"),
            description: t("product:solutions.items.trading.description"),
        },
        {
            icon: Landmark,
            title: t("product:solutions.items.investment.title"),
            description: t("product:solutions.items.investment.description"),
        },
        {
            icon: Settings2,
            title: t("product:solutions.items.operation.title"),
            description: t("product:solutions.items.operation.description"),
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="py-24 bg-[#F7F9FF]"
        >

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <h2 className="text-4xl font-bold text-[#23478F]">
                        {t("product:solutions.title")}
                    </h2>

                    <div className="w-20 h-1 bg-[#B6C95C] rounded-full mx-auto mt-5" />

                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {solutions.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div
                                key={index}
                                whileHover={{
                                    y: -8,
                                }}
                                transition={{
                                    duration: .25,
                                }}
                                className="
                                    bg-white
                                    border
                                    border-gray-200
                                    rounded-2xl
                                    p-8
                                    shadow-sm
                                    hover:shadow-xl
                                    hover:border-[#B6C95C]
                                    transition-all
                                    duration-300
                                    relative
                                    overflow-hidden
                                "
                            >

                                {/* Accent */}

                                <div className="absolute left-0 top-0 w-full h-1 bg-[#B6C95C]" />

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
                                        size={26}
                                        className="text-[#23478F]"
                                    />
                                </div>

                                <h3 className="text-2xl font-bold text-[#23478F] mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    {item.description}
                                </p>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </motion.section>
    );

}