import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LeadershipSection() {
    const { t } = useTranslation("about");

    const leaders = [
        {
            name: t("about:leadership.leaders.leader1.name"),
            position: t("about:leadership.leaders.leader1.position"),
        },
        {
            name: t("about:leadership.leaders.leader2.name"),
            position: t("about:leadership.leaders.leader2.position"),
        },
        {
            name: t("about:leadership.leaders.leader3.name"),
            position: t("about:leadership.leaders.leader3.position"),
        }
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
            className="py-24 bg-[#F8FAFC]"
        >

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <span
                        className="
                            inline-block
                            px-4
                            py-2
                            rounded-full
                            bg-[#EEF4D7]
                            text-[#7A9433]
                            text-sm
                            font-semibold
                            uppercase
                            tracking-wider
                            mb-4
                        "
                    >
                        {t("about:leadership.badge")}
                    </span>

                    <h2 className="text-4xl font-bold text-[#23478F]">
                        {t("about:leadership.title")}
                    </h2>

                    <div className="w-20 h-1 bg-[#B6C95C] rounded-full mx-auto mt-5"></div>

                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {leaders.map((leader, index) => (

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
                                hover:shadow-2xl
                                hover:-translate-y-2
                                hover:border-[#B6C95C]
                                transition-all
                                duration-300
                            "
                        >

                            {/* Accent */}

                            <div className="h-1 bg-[#B6C95C]"></div>

                            {/* Placeholder Photo */}

                            <div
                                className="
                                    relative
                                    h-72
                                    bg-gradient-to-br
                                    from-[#EEF4D7]
                                    to-[#F7F9FF]
                                    flex
                                    items-center
                                    justify-center
                                "
                            >

                                <div
                                    className="
                                        w-28
                                        h-28
                                        rounded-full
                                        bg-white
                                        shadow-lg
                                        flex
                                        items-center
                                        justify-center
                                        group-hover:scale-110
                                        transition-transform
                                        duration-300
                                    "
                                >

                                    <User
                                        size={54}
                                        className="text-[#7A9433]"
                                    />

                                </div>

                                <span
                                    className="
                                        absolute
                                        top-5
                                        left-5
                                        bg-white/90
                                        backdrop-blur
                                        text-[#7A9433]
                                        px-3
                                        py-1
                                        rounded-full
                                        text-xs
                                        font-semibold
                                        uppercase
                                    "
                                >
                                    {t("about:leadership.badge")}
                                </span>

                            </div>

                            {/* Content */}

                            <div className="p-7 text-center">

                                <h4
                                    className="
                                        text-xl
                                        font-bold
                                        text-[#23478F]
                                        group-hover:text-[#7A9433]
                                        transition-colors
                                    "
                                >
                                    {leader.name}
                                </h4>

                                <p className="text-gray-500 mt-2">
                                    {leader.position}
                                </p>

                                <div
                                    className="
                                        w-12
                                        h-1
                                        rounded-full
                                        bg-[#B6C95C]
                                        mx-auto
                                        mt-5
                                        group-hover:w-20
                                        transition-all
                                        duration-300
                                    "
                                />

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </motion.section>
    );
}