import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function OfficeLocation() {
    const { t } = useTranslation("contact");
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
            className="pb-24">

            <div className="max-w-7xl mx-auto px-6 mt-10">

                <h2
                    className="
                        text-center
                        text-4xl
                        font-bold
                        text-[#23478F]
                        mb-10
                    "
                >
                    {t("contact:location.title")}
                </h2>

                <div
                    className="
                        overflow-hidden
                        rounded-xl
                        border
                    "
                >
                    <iframe
                        src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        loading="lazy"
                    />
                </div>

            </div>

        </motion.section>
    );
}