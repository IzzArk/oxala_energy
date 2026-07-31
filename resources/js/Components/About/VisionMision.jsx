import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function VisionMissionSection() {
    const { t } = useTranslation("about");
    const missions = [
        t("about:visionMission.missions.1"),

        t("about:visionMission.missions.2"),

        t("about:visionMission.missions.3"),

        t("about:visionMission.missions.4"),

        t("about:visionMission.missions.5"),

        t("about:visionMission.missions.6"),
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
            className="bg-[#B6C95C] py-20 lg:py-32">

            <div className="max-w-7xl mx-auto px-6">

                <div className="relative text-center">

                    <div
                        className="
                            absolute
                            left-0
                            top-0
                            text-[#1F4B9A]
                            text-[100px]
                            lg:text-[140px]
                            font-bold
                            leading-none
                        "
                    >
                        ❝
                    </div>

                    <div
                        className="
                            absolute
                            right-0
                            bottom-0
                            text-[#1F4B9A]
                            text-[100px]
                            lg:text-[140px]
                            font-bold
                            leading-none
                        "
                    >
                        ❞
                    </div>

                    <h3
                        className="
                            text-[#1F4B9A]
                            font-bold
                            text-3xl
                            lg:text-5xl
                            mb-10
                        "
                    >
                        {t("about:visionMission.visionTitle")}
                    </h3>

                    <h2
                        className="
                            text-white
                            font-semibold
                            text-3xl
                            md:text-5xl
                            lg:text-6xl
                            leading-tight
                            max-w-5xl
                            mx-auto
                        "
                    >
                        {t("about:visionMission.vision")}
                    </h2>

                </div>

                <div className="mt-24">

                    <h3
                        className="
                            text-center
                            text-[#1F4B9A]
                            text-3xl
                            lg:text-5xl
                            font-bold
                            mb-16
                        "
                    >
                        {t("about:visionMission.missionTitle")}
                    </h3>

                    <div
                        className="
                            grid
                            grid-cols-2
                            md:grid-cols-3
                            lg:grid-cols-6
                            gap-8
                        "
                    >

                        {missions.map((mission, index) => (
                            <div
                                key={index}
                                className="text-center"
                            >

                                <div
                                    className="
                                        w-16
                                        h-16
                                        lg:w-20
                                        lg:h-20
                                        rounded-full
                                        bg-[#1F4B9A]
                                        text-white
                                        flex
                                        items-center
                                        justify-center
                                        mx-auto
                                        text-3xl
                                        font-bold
                                        mb-4
                                    "
                                >
                                    {index + 1}
                                </div>

                                <p
                                    className="
                                        text-[#1d1d1d]
                                        text-m
                                        font-medium
                                        leading-relaxed
                                    "
                                >
                                    {mission}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </motion.section>
    );
}