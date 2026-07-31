import { motion } from "framer-motion";
import {
    ShieldCheck,
    Leaf,
    Cpu
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ProductAdvantages() {
    const { t } = useTranslation("product");

    const items = [
        {
            icon: ShieldCheck,
            title: t("product:advantages.items.safety")
        },
        {
            icon: Cpu,
            title: t("product:advantages.items.technology")
        },
        {
            icon: Leaf,
            title: t("product:advantages.items.environment")
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

            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl text-center font-bold text-[#23478F] mb-16">
                    {t("product:advantages.title")}
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {items.map((item, index) => {

                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="
                                    border
                                    rounded-xl
                                    p-8
                                    text-center
                                "
                            >
                                <Icon
                                    size={40}
                                    className="mx-auto text-[#23478F]"
                                />

                                <h3 className="mt-4 font-bold">
                                    {item.title}
                                </h3>

                            </div>
                        );
                    })}

                </div>

            </div>

        </motion.section>
    );
}