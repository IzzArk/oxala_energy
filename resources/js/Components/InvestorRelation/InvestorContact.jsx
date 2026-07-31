import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function InvestorContact() {
    const { t } = useTranslation("investor");
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

            <div className="max-w-4xl mx-auto px-6">

                <div
                    className="
                        bg-[#23478F]
                        rounded-2xl
                        text-white
                        p-12
                        text-center
                    "
                >
                    <h2 className="text-3xl font-bold">
                        {t("investor:contact.title")}
                    </h2>

                    <p className="mt-4 text-blue-100">
                        {t("investor:contact.description")}
                    </p>

                    <div className="mt-8 space-y-2">

                        <p>investor@oxala.co.id</p>

                        <p>+62 21 5555 1234</p>

                    </div>

                </div>

            </div>

        </motion.section>
    );
}