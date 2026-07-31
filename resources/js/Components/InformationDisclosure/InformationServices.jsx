import {
    FileText,
    CalendarDays,
    Bell,
    Download,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function InformationServices() {
    const { t } = useTranslation("information");
    const services = [
        {
            icon: FileText,
            title: t("information:services.items.documents.title"),
            description:
                t("information:services.items.documents.description")
        },
        {
            icon: CalendarDays,
            title: t("information:services.items.calendar.title"),
            description:
                t("information:services.items.calendar.description")
        },
        {
            icon: Bell,
            title: t("information:services.items.announcement.title"),
            description:
                t("information:services.items.announcement.description")
        },
        {
            icon: Download,
            title: t("information:services.items.download.title"),
            description:
                t("information:services.items.download.description")
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 py-24"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <span className="text-[#7A9433] font-semibold uppercase tracking-widest">
                        {t("information:services.badge")}
                    </span>

                    <h2 className="text-4xl font-bold text-[#23478F] mt-3">
                        {t("information:services.title")}
                    </h2>

                    <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-8">
                        {t("information:services.description")}
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {services.map((item, index) => {

                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                whileHover={{
                                    y: -8,
                                }}
                                className="
                                    bg-white
                                    p-8
                                    rounded-2xl
                                    border
                                    border-gray-200
                                    shadow-sm
                                    hover:shadow-xl
                                    transition-all
                                "
                            >
                                <div className="
                                    w-14
                                    h-14
                                    rounded-xl
                                    bg-[#EEF4D7]
                                    flex
                                    items-center
                                    justify-center
                                    mb-6
                                ">
                                    <Icon
                                        size={28}
                                        className="text-[#7A9433]"
                                    />
                                </div>

                                <h3 className="text-xl font-semibold text-[#23478F] mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 leading-7 text-sm">
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