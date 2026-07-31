import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function InvestorCalendar({ events }) {
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
            className="py-24 bg-[#F7F9FF]">

            <div className="max-w-5xl mx-auto px-6">

                <h2 className="text-4xl text-center font-bold text-[#23478F] mb-12">
                    {t("investor:calendar.title")}
                </h2>

                <div className="space-y-6">

                    {events.length > 0 ? (

                        <div className="space-y-6">

                            {events.map((event) => (

                                <div
                                    key={event.id}
                                    className="
                                    bg-white
                                    border
                                    border-gray-100
                                    rounded-2xl
                                    p-6
                                    shadow-sm
                                    hover:shadow-lg
                                    hover:border-[#B6C95C]
                                    transition-all
                                    duration-300
                                "
                                >

                                    <span
                                        className="
                                        inline-block
                                        px-3
                                        py-1
                                        rounded-full
                                        bg-[#EEF4D7]
                                        text-[#7A9433]
                                        text-xs
                                        font-semibold
                                        uppercase
                                        mb-4
                                    "
                                    >
                                        {t("investor:calendar.badge")}
                                    </span>

                                    <p className="text-sm text-gray-500">
                                        {event.formatted_date}
                                    </p>

                                    <h3 className="text-xl font-bold text-[#23478F] mt-2">
                                        {event.title}
                                    </h3>

                                    {event.description && (
                                        <p className="mt-3 text-gray-600 leading-7">
                                            {event.description}
                                        </p>
                                    )}

                                </div>

                            ))}

                        </div>

                    ) : (

                        <div
                            className="
                            bg-white
                            rounded-2xl
                            border
                            border-dashed
                            border-[#B6C95C]
                            py-16
                            text-center
                        "
                        >
                            <h3 className="text-xl font-semibold text-[#23478F]">
                                {t("investor:calendar.empty.title")}
                            </h3>

                            <p className="text-gray-500 mt-3">
                                {t("investor:calendar.empty.title")}
                            </p>

                        </div>

                    )}


                </div>

            </div>

        </motion.section>
    );
}