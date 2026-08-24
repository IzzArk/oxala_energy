import { motion } from "framer-motion";
import {
    Building2,
    Landmark,
    Factory,
    Handshake,
    Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CompanyTimeline() {
    const { t } = useTranslation("about");

    const history = [
        {
            year: t("about:timeline.history.2005.year"),
            text: t("about:timeline.history.2005.text"),
            icon: Building2,
        },
        {
            year: t("about:timeline.history.2012.year"),
            text: t("about:timeline.history.2012.text"),
            icon: Factory,
        },
        {
            year: t("about:timeline.history.2023.year"),
            text: t("about:timeline.history.2023.text"),
            icon: Landmark,
        },
        {
            year: t("about:timeline.history.2025.year"),
            text: t("about:timeline.history.2025.text"),
            icon: Handshake,
        },
        {
            year: t("about:timeline.history.2026.year"),
            text: t("about:timeline.history.2026.text"),
            icon: Sparkles,
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="py-24 bg-[#F7F9FF]"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">

                    <h2 className="text-4xl font-bold text-[#23478F] mt-5">
                        {t("about:timeline.title")}
                    </h2>

                    <div className="w-24 h-1 bg-[#B6C95C] rounded-full mx-auto mt-5" />

                </div>

                <div className="relative">


                    <div
                        className="
                            absolute
                            top-8
                            left-0
                            right-0
                            h-[3px]
                            bg-[#B6C95C]/40
                            rounded-full
                            hidden
                            lg:block
                        "
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

                        {history.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <motion.div
                                    key={item.year}
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        delay: index * .15,
                                    }}
                                    className="relative text-center group"
                                >

                                    <div className="hidden lg:block">


                                        <div
                                            className="
                                                w-6
                                                h-6
                                                rounded-full
                                                bg-[#23478F]
                                                border-4
                                                border-white
                                                shadow-lg
                                                mx-auto
                                                relative
                                                z-10
                                                group-hover:scale-125
                                                transition
                                            "
                                        />


                                        <div
                                            className="
                                                mt-8
                                                bg-white
                                                rounded-2xl
                                                border
                                                border-gray-100
                                                shadow-sm
                                                p-6
                                                hover:shadow-xl
                                                hover:-translate-y-2
                                                transition-all
                                                duration-300
                                            "
                                        >

                                            <div
                                                className="
                                                    w-12
                                                    h-12
                                                    flex
                                                    items-center
                                                    justify-center
                                                    mx-auto
                                                    mb-5
                                                "
                                            >

                                                <Icon
                                                    className="text-[#7A9433]"
                                                    size={30}
                                                />

                                            </div>

                                            <span
                                                className="
                                                    inline-block
                                                    bg-[#EEF4D7]
                                                    text-[#23478F]
                                                    font-bold
                                                    px-4
                                                    py-1
                                                    rounded-full
                                                    text-lg
                                                "
                                            >
                                                {item.year}
                                            </span>

                                            <p
                                                className="
                                                    mt-4
                                                    text-gray-600
                                                    text-sm
                                                    leading-7
                                                "
                                            >
                                                {item.text}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="lg:hidden flex gap-5">

                                        <div className="flex flex-col items-center">

                                            <div
                                                className="
                                                    w-12
                                                    h-12
                                                    rounded-full
                                                    bg-[#23478F]
                                                    flex
                                                    items-center
                                                    justify-center
                                                "
                                            >
                                                <Icon
                                                    className="text-white"
                                                    size={20}
                                                />
                                            </div>

                                            {index !== history.length - 1 && (
                                                <div className="w-[2px] flex-1 bg-[#B6C95C]/40 mt-2" />
                                            )}

                                        </div>

                                        <div className="pb-10">

                                            <span
                                                className="
                                                    inline-block
                                                    bg-[#EEF4D7]
                                                    text-[#23478F]
                                                    px-3
                                                    py-1
                                                    rounded-full
                                                    font-bold
                                                "
                                            >
                                                {item.year}
                                            </span>

                                            <p className="mt-3 text-gray-600 leading-7">
                                                {item.text}
                                            </p>

                                        </div>

                                    </div>

                                </motion.div>

                            );

                        })}

                    </div>

                </div>

            </div>
        </motion.section>
    );
}