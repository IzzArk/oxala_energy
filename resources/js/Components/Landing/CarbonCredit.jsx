import { motion } from "framer-motion";
import {
    Leaf,
    Wind,
    BadgeCheck,
    ArrowRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CarbonCredit() {
    const { t } = useTranslation("home");
    const items = [
        {
            icon: Leaf,
            title: t("home:carbonCredit.items.carbon.title"),
            description:
                t("home:carbonCredit.items.carbon.description"),
        },
        {
            icon: Wind,
            title: t("home:carbonCredit.items.renewable.title"),
            description:
                t("home:carbonCredit.items.renewable.description"),
        },
        {
            icon: BadgeCheck,
            title: t("home:carbonCredit.items.esg.title"),
            description:
                t("home:carbonCredit.items.esg.description"),
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
                amount: .2,
            }}
            transition={{
                duration: .8,
            }}
            className="py-24 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* IMAGE */}

                    <div className="relative">

                        <img
                            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&q=80"
                            alt=""
                            className="
                                rounded-3xl
                                h-[650px]
                                w-full
                                object-cover
                                shadow-2xl
                            "
                        />

                        {/* Floating Card */}

                        <div
                            className="
                                absolute
                                left-8
                                bottom-8
                                bg-white
                                rounded-2xl
                                shadow-xl
                                p-6
                                max-w-xs
                            "
                        >

                            <span
                                className="
                                    text-sm
                                    font-semibold
                                    text-[#7A9433]
                                "
                            >
                                {t("home:carbonCredit.floating.badge")}
                            </span>

                            <h3
                                className="
                                    text-2xl
                                    font-bold
                                    text-[#23478F]
                                    mt-2
                                "
                            >
                                {t("home:carbonCredit.floating.title")}
                            </h3>

                            <p className="text-gray-500 mt-3">
                                {t("home:carbonCredit.floating.description")}
                            </p>

                        </div>

                    </div>

                    {/* CONTENT */}

                    <div>

                        <span
                            className="
                                inline-block
                                bg-[#EEF4D7]
                                text-[#7A9433]
                                px-4
                                py-2
                                rounded-full
                                font-semibold
                                text-sm
                            "
                        >
                            {t("home:carbonCredit.badge")}
                        </span>

                        <h2
                            className="
                                mt-6
                                text-5xl
                                font-bold
                                text-[#23478F]
                                leading-tight
                            "
                        >
                            {t("home:carbonCredit.title")}
                        </h2>

                        <div className="w-24 h-1 bg-[#B6C95C] rounded-full mt-6"></div>

                        <p
                            className="
                                mt-8
                                text-gray-600
                                leading-8
                                text-lg
                            "
                        >
                            {t("home:carbonCredit.description")}
                        </p>

                        <div className="space-y-7 mt-10">

                            {items.map((item, index) => {

                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="flex gap-5"
                                    >

                                        <div
                                            className="
                                                w-14
                                                h-14
                                                rounded-xl
                                                bg-[#EEF4D7]
                                                flex
                                                items-center
                                                justify-center
                                                flex-shrink-0
                                            "
                                        >
                                            <Icon
                                                className="text-[#7A9433]"
                                                size={28}
                                            />
                                        </div>

                                        <div>

                                            <h3
                                                className="
                                                    font-bold
                                                    text-xl
                                                    text-[#23478F]
                                                "
                                            >
                                                {item.title}
                                            </h3>

                                            <p
                                                className="
                                                    mt-2
                                                    text-gray-600
                                                    leading-7
                                                "
                                            >
                                                {item.description}
                                            </p>

                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                        <a
                            href="/produk"
                            className="
                                inline-flex
                                items-center
                                gap-3
                                mt-12
                                bg-[#23478F]
                                text-white
                                px-8
                                py-4
                                rounded-xl
                                hover:bg-[#1b3873]
                                transition
                            "
                        >
                            {t("home:carbonCredit.button")}

                            <ArrowRight size={18} />
                        </a>

                    </div>

                </div>

            </div>
        </motion.section>
    );
}