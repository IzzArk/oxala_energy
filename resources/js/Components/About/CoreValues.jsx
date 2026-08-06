import {
    ShieldCheck,
    Handshake,
    Lightbulb,
    Leaf,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function CoreValues() {
    const { t } = useTranslation("about");

    const values = [
        {
            icon: ShieldCheck,
            title: t("about:coreValues.values.safety.title"),
            description: t("about:coreValues.values.safety.description"),
        },
        {
            icon: Handshake,
            title: t("about:coreValues.values.integrity.title"),
            description: t("about:coreValues.values.integrity.description"),
        },
        {
            icon: Lightbulb,
            title: t("about:coreValues.values.innovation.title"),
            description: t("about:coreValues.values.innovation.description"),
        },
        {
            icon: Leaf,
            title: t("about:coreValues.values.sustainability.title"),
            description: t("about:coreValues.values.sustainability.description"),
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="py-24 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <h2 className="text-4xl font-bold text-[#23478F]">
                        {t("about:coreValues.title")}
                    </h2>

                    <div className="w-16 h-1 bg-[#B6C95C] rounded-full mx-auto mt-5" />

                </div>

                {/* Cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {values.map((value, index) => {

                        const Icon = value.icon;

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
                                    group
                                    bg-white
                                    border
                                    border-gray-200
                                    rounded-2xl
                                    p-7
                                    shadow-sm
                                    hover:shadow-xl
                                    hover:border-[#B6C95C]
                                    transition-all
                                    duration-300
                                "
                            >

                                {/* Icon */}

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
                                        className="
                                            text-[#7A9433]
                                            group-hover:scale-110
                                            transition-transform
                                        "
                                    />

                                </div>

                                {/* Title */}

                                <h3
                                    className="
                                        text-xl
                                        font-bold
                                        text-[#23478F]
                                        mb-3
                                        group-hover:text-[#7A9433]
                                        transition-colors
                                    "
                                >
                                    {value.title}
                                </h3>

                                {/* Description */}

                                <p
                                    className="
                                        text-gray-600
                                        leading-7
                                        text-[15px]
                                    "
                                >
                                    {value.description}
                                </p>

                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </motion.section>
    );
}