import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function OrganizationStructure() {
    const { t } = useTranslation("information");
    const board = t("organization.board", { returnObjects: true });
    const directors = t("organization.directors", { returnObjects: true });

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
                        {t("information:organization.title")}
                    </h2>

                    <div className="w-20 h-1 bg-[#B6C95C] rounded-full mx-auto mt-5"></div>

                </div>

                {/* BOARD */}

                <div className="mb-16">

                    <h3 className="text-center text-2xl font-bold text-[#23478F] mb-10">
                        {t("information:organization.boardTitle")}
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">

                        {board.map((item, index) => (

                            <div
                                key={index}
                                className={`
                                    group
                                    rounded-2xl
                                    overflow-hidden
                                    shadow-sm
                                    border
                                    transition-all
                                    duration-300
                                    hover:-translate-y-2
                                    hover:shadow-xl
                                    ${item.highlight
                                        ? "bg-[#23478F] border-[#23478F] text-white"
                                        : "bg-white border-gray-100 hover:border-[#B6C95C]"
                                    }
                                `}
                            >

                                <div
                                    className={`h-1 ${item.highlight
                                        ? "bg-[#B6C95C]"
                                        : "bg-[#B6C95C]"
                                        }`}
                                />

                                <div className="p-8 text-center">

                                    <div
                                        className={`
                                            w-16
                                            h-16
                                            rounded-full
                                            mx-auto
                                            flex
                                            items-center
                                            justify-center
                                            mb-6
                                            ${item.highlight
                                                ? "bg-white/20"
                                                : "bg-[#EEF4D7]"
                                            }
                                        `}
                                    >

                                        <Building2
                                            size={28}
                                            className={
                                                item.highlight
                                                    ? "text-white"
                                                    : "text-[#7A9433]"
                                            }
                                        />

                                    </div>

                                    <h4
                                        className={`
                                            text-xl
                                            font-bold
                                            transition-colors
                                            ${item.highlight
                                                ? "text-white"
                                                : "text-[#23478F] group-hover:text-[#7A9433]"
                                            }
                                        `}
                                    >
                                        {item.name}
                                    </h4>

                                    <p
                                        className={`mt-3 ${item.highlight
                                            ? "text-white/80"
                                            : "text-gray-500"
                                            }`}
                                    >
                                        {item.position}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* Connector */}

                <div className="flex flex-col items-center mb-16">

                    <div className="w-1 h-12 bg-[#B6C95C]" />

                    <div className="w-5 h-5 rounded-full bg-[#B6C95C] shadow-md" />

                    <div className="w-1 h-12 bg-[#B6C95C]" />

                </div>

                {/* DIREKTUR */}

                <div>

                    <h3 className="text-center text-2xl font-bold text-[#23478F] mb-10">
                        {t("information:organization.directorTitle")}
                    </h3>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">

                        {directors.map((item, index) => (

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
                                    hover:border-[#B6C95C]
                                    hover:shadow-xl
                                    hover:-translate-y-2
                                    transition-all
                                    duration-300
                                "
                            >

                                <div className="h-1 bg-[#B6C95C]" />

                                <div className="p-6 text-center">

                                    <div
                                        className="
                                            w-14
                                            h-14
                                            rounded-full
                                            bg-[#EEF4D7]
                                            flex
                                            items-center
                                            justify-center
                                            mx-auto
                                            mb-5
                                        "
                                    >

                                        <Building2
                                            size={24}
                                            className="text-[#7A9433]"
                                        />

                                    </div>

                                    <h4
                                        className="
                                            font-bold
                                            text-[#23478F]
                                            group-hover:text-[#7A9433]
                                            transition-colors
                                        "
                                    >
                                        {item.name}
                                    </h4>

                                    <p className="text-sm text-gray-500 mt-3 leading-6">
                                        {item.position}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </motion.section>
    );
}