import {
    ShieldCheck,
    Users,
    Lightbulb,
    Leaf
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function CoreValues() {
    const { t } = useTranslation("about");

    const values = [
        {
            icon: ShieldCheck,
            title: t("about:coreValues.values.safety")
        },
        {
            icon: Users,
            title: t("about:coreValues.values.integrity")
        },
        {
            icon: Lightbulb,
            title: t("about:coreValues.values.innovation")
        },
        {
            icon: Leaf,
            title: t("about:coreValues.values.sustainability")
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

                <div className="text-center mb-16">

                    <h2 className="text-4xl font-bold text-[#23478F]">
                        {t("about:coreValues.title")}
                    </h2>

                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                    {values.map((value, index) => {

                        const Icon = value.icon;

                        return (
                            <div
                                key={index}
                                className="
                                    bg-white
                                    border
                                    rounded-xl
                                    p-8
                                    text-center
                                "
                            >

                                <Icon
                                    size={40}
                                    className="
                                        mx-auto
                                        text-[#23478F]
                                        mb-4
                                    "
                                />

                                <h4 className="font-semibold">
                                    {value.title}
                                </h4>

                            </div>
                        );
                    })}

                </div>

            </div>

        </motion.section>
    );
}