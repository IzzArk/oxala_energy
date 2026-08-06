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

                <div className="text-center max-w-3xl mx-auto">

                    <span className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                bg-[#EEF4D7]
                text-[#7A9433]
                text-sm
                font-semibold
                             ">
                        {t("home:carbonCredit.badge")}
                    </span>

                    <h2 className="
                mt-6
                text-5xl
                font-bold
                text-[#23478F]
                             ">
                        {t("home:carbonCredit.title")}
                    </h2>

                    <div className="w-20 h-1 bg-[#B6C95C] mx-auto rounded-full mt-5" />

                    <p className="mt-6 text-lg text-gray-600 leading-8">
                        {t("home:carbonCredit.description")}
                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-8 mt-16">

                    {items.slice(0, 2).map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                className="
                            group
                            bg-white
                            rounded-3xl
                            border
                            border-gray-200
                            p-10
                            hover:shadow-xl
                            hover:-translate-y-2
                            transition-all
                            duration-300
                        "
                            >

                                <div className="
                            w-16
                            h-16
                            rounded-2xl
                            bg-[#EEF4D7]
                            flex
                            items-center
                            justify-center
                            group-hover:bg-[#B6C95C]
                            transition
                        ">

                                    <Icon
                                        size={30}
                                        className="text-[#7A9433] group-hover:text-white"
                                    />

                                </div>

                                <h3 className="
                            mt-8
                            text-2xl
                            font-bold
                            text-[#23478F]
                        ">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-gray-600 leading-8">
                                    {item.description}
                                </p>

                            </div>

                        )

                    })}

                </div>





            </div>
        </motion.section>
    );
}