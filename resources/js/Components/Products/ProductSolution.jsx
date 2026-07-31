import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ProductSolutions() {
    const { t } = useTranslation("product");

    const solutions = t("solutions.items", { returnObjects: true });

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

                <h2 className="text-4xl font-bold text-center text-[#23478F]">
                    {t("product:solutions.title")}
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

                    {solutions.map((item, index) => (
                        <div
                            key={index}
                            className="
                                bg-white
                                border
                                rounded-xl
                                p-6
                                text-center
                            "
                        >
                            {item}
                        </div>
                    ))}

                </div>

            </div>

        </motion.section>
    );
}