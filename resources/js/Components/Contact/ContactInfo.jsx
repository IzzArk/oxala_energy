import { motion } from "framer-motion";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ContactInfo() {
    const { t } = useTranslation("contact");
    const contacts = [
        {
            icon: MapPin,
            title: t("contact:info.items.address.title"),
            value: t("contact:info.items.address.value"),
        },
        {
            icon: Phone,
            title: t("contact:info.items.phone.title"),
            value: t("contact:info.items.phone.value"),
        },
        {
            icon: Mail,
            title: t("contact:info.items.email.title"),
            value: t("contact:info.items.email.value"),
        },
        {
            icon: Clock,
            title: t("contact:info.items.hours.title"),
            value: t("contact:info.items.hours.value"),
        },
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
            className="py-24 bg-[#ffffff]"
        >

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <h2 className="text-4xl font-bold text-[#23478F]">
                        {t("contact:info.title")}
                    </h2>

                    <div className="w-20 h-1 bg-[#B6C95C] rounded-full mx-auto mt-5" />

                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                        {t("contact:info.description")}
                    </p>

                </div>

                {/* Cards */}

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {contacts.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                className="
                                    group
                                    bg-white
                                    rounded-2xl
                                    overflow-hidden
                                    border
                                    border-gray-100
                                    shadow-sm
                                    hover:shadow-xl
                                    hover:border-[#B6C95C]
                                    hover:-translate-y-2
                                    transition-all
                                    duration-300
                                    h-full
                                "
                            >

                                {/* Accent */}

                                <div className="h-1 bg-[#B6C95C]" />

                                <div className="p-8 text-center">

                                    <div
                                        className="
                                            w-16
                                            h-16
                                            mx-auto
                                            rounded-full
                                            bg-[#EEF4D7]
                                            flex
                                            items-center
                                            justify-center
                                            mb-6
                                            transition-all
                                            duration-300
                                            group-hover:bg-[#B6C95C]
                                        "
                                    >

                                        <Icon
                                            size={28}
                                            className="
                                                text-[#7A9433]
                                                group-hover:text-white
                                                transition-colors
                                            "
                                        />

                                    </div>

                                    <h3
                                        className="
                                            text-xl
                                            font-bold
                                            text-[#23478F]
                                            group-hover:text-[#7A9433]
                                            transition-colors
                                            mb-4
                                        "
                                    >
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 leading-7 text-sm">
                                        {item.value}
                                    </p>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </motion.section>
    );
}