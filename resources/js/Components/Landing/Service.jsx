import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import {
    Factory,
    Zap,
    Truck,
    Building2,
} from "lucide-react";
import { useTranslation } from "react-i18next";


export default function Services() {
    const { t } = useTranslation("home");
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
            className="py-24 bg-[#F7F9FF]"
        >

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <div className="text-center max-w-3xl mx-auto">

                        <h2 className="
                mt-6
                text-5xl
                font-bold
                text-[#23478F]
                             ">
                            {t("home:services.title")}
                        </h2>

                        <div className="w-20 h-1 bg-[#B6C95C] mx-auto rounded-full mt-5" />

                    </div>
                    <div className="w-20 h-1 mx-auto mt-4" />

                </div>


                {/* BARIS 1 */}

                <div className="grid lg:grid-cols-3 gap-6 mb-6">

                    <div className="lg:col-span-2">

                        <ServiceCard
                            icon={Factory}
                            title={t("home:services.exploration.title")}
                            description={t("home:services.exploration.description")}
                            large

                        />

                    </div>

                    <ServiceCard
                        icon={Zap}
                        title={t("home:services.renewable.title")}
                        description={t("home:services.renewable.description")}
                        image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
                    />

                </div>

                {/* BARIS 2 */}

                <div className="grid lg:grid-cols-3 gap-6">

                    <ServiceCard
                        icon={Truck}
                        title={t("home:services.distribution.title")}
                        description={t("home:services.distribution.description")}
                    />

                    <div className="lg:col-span-2">

                        <ServiceCard
                            icon={Building2}
                            title={t("home:services.technology.title")}
                            description={t("home:services.technology.description")}
                            image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
                            horizontal
                        />

                    </div>

                </div>

            </div>

        </motion.section>
    );
}