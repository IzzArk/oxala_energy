import Logo from "../../../Assets/Oxala-Logo.png"
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function CompanyOverview() {
    const { t } = useTranslation("about");
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
            className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>

                        <img
                            src={Logo}
                            className="w-auto h-100 items-center"
                        />

                    </div>

                    <div>

                        <h2 className="text-4xl font-bold text-[#23478F] mb-6">
                            {t("about:companyOverview.title")}
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                            {t("about:companyOverview.paragraph1")}
                        </p>

                        <p className="text-gray-600 leading-relaxed text-lg">
                            {t("about:companyOverview.paragraph2")}
                        </p>

                    </div>

                </div>

            </div>

        </motion.section>
    );
}