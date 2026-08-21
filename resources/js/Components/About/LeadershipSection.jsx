import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LeadershipSection({ leaders = [] }) {
    const { t } = useTranslation("about");

    return (
        <motion.section
            initial={{
                opacity: 0,
                y: 40,
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
                duration: 0.7,
            }}
            className="py-20 md:py-24 bg-white"
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-14">

                    <span
                        className="
                            inline-flex
                            items-center
                            gap-2
                            px-4
                            py-1.5
                            rounded-full
                            bg-[#EEF4D7]
                            text-[#7A9433]
                            text-[11px]
                            font-medium
                            tracking-[0.18em]
                            uppercase
                        "
                    >
                        <span className="text-[#7A9433]">
                            ✓
                        </span>

                        {t("about:leadership.badge")}
                    </span>

                    <h2
                        className="
                            mt-4
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-[#123563]
                        "
                    >
                        {t("about:leadership.title")}
                    </h2>

                    <div
                        className="
                            w-14
                            h-1
                            bg-[#B6C95C]
                            rounded-full
                            mx-auto
                            mt-4
                        "
                    />

                </div>

                {/* Leaders */}
                <div
                    className="
                        grid
                        grid-cols-1
                        lg:grid-cols-2
                        gap-x-8
                        gap-y-12
                        items-start
                    "
                >

                    {leaders.map((leader, index) => (

                        <motion.div
                            key={leader.id}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            className="group text-center"
                        >

                            {/* Photo */}
                            <div
                                className="
                                    mx-auto
                                    w-64
                                    h-64
                                    md:w-72
                                    md:h-72
                                    lg:w-80
                                    lg:h-80
                                    flex
                                    items-end
                                    justify-center
                                    transition-transform
                                    duration-300
                                    group-hover:scale-[1.03]
                                "
                            >

                                {leader.photo ? (
                                    <img
                                        src={`/storage/${leader.photo}`}
                                        alt={leader.name}
                                        className="
                                            w-full
                                            h-full
                                            object-contain
                                            object-bottom
                                        "
                                    />
                                ) : (
                                    <div
                                        className="
                                            w-32
                                            h-32
                                            md:w-40
                                            md:h-40
                                            rounded-full
                                            bg-[#EEF4D7]
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >
                                        <User
                                            size={64}
                                            className="text-[#4C2A8A]"
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                )}

                            </div>

                            {/* Position */}
                            <p
                                className="
                                    mt-5
                                    text-[11px]
                                    md:text-sm
                                    font-medium
                                    tracking-[0.14em]
                                    uppercase
                                    text-[#9BAE3D]
                                    leading-relaxed
                                "
                            >
                                {leader.position}
                            </p>

                            {/* Name */}
                            <h3
                                className="
                                    mt-2
                                    text-base
                                    md:text-lg
                                    font-bold
                                    text-[#123563]
                                    leading-snug
                                    transition-colors
                                    duration-300
                                    group-hover:text-[#7A9433]
                                "
                            >
                                {leader.name}
                            </h3>

                        </motion.div>

                    ))}

                </div>

            </div>
        </motion.section>
    );
}