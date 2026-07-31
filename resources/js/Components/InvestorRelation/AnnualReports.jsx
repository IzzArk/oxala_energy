import { Download } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/pagination";

export default function AnnualReports({ reports }) {
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
            className="py-24 bg-[#ffff]"
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <h2 className="text-4xl font-bold text-[#23478F]">
                        {t("investor:annualReports.title")}
                    </h2>

                    <div className="w-20 h-1 bg-[#B6C95C] rounded-full mx-auto mt-5"></div>

                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                        {t("investor:annualReports.description")}
                    </p>

                </div>

                {reports.length > 0 ? (

                    <Swiper
                        modules={[Pagination]}
                        pagination={{
                            clickable: true,
                        }}
                        spaceBetween={24}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="pb-14"
                    >

                        {reports.map((report) => (

                            <SwiperSlide
                                key={report.id}
                                className="h-auto"
                            >

                                <div
                                    className="
                                        group
                                        h-full
                                        bg-white
                                        rounded-2xl
                                        border
                                        border-gray-100
                                        overflow-hidden
                                        shadow-sm
                                        hover:shadow-xl
                                        hover:-translate-y-2
                                        hover:border-[#B6C95C]
                                        transition-all
                                        duration-300
                                    "
                                >

                                    {/* Accent */}

                                    <div className="h-1 bg-[#B6C95C]" />

                                    <div className="p-6 flex flex-col h-full">

                                        <span
                                            className="
                                                inline-block
                                                w-fit
                                                px-3
                                                py-1
                                                rounded-full
                                                bg-[#EEF4D7]
                                                text-[#7A9433]
                                                text-xs
                                                font-semibold
                                                uppercase
                                                tracking-wider
                                                mb-5
                                            "
                                        >
                                            {t("investor:annualReports.badge")}
                                        </span>

                                        <h3
                                            className="
                                                text-xl
                                                font-bold
                                                text-[#23478F]
                                                group-hover:text-[#7A9433]
                                                transition-colors
                                            "
                                        >
                                            {report.title}
                                        </h3>

                                        <p className="text-gray-500 mt-2">
                                            {t("investor:annualReports.year")} {report.year}
                                        </p>

                                        <div className="mt-auto pt-8">

                                            <a
                                                href={`/storage/${report.file}`}
                                                download
                                                className="
                                                    inline-flex
                                                    items-center
                                                    gap-3
                                                    px-4
                                                    py-3
                                                    rounded-xl
                                                    bg-[#EEF4D7]
                                                    text-[#7A9433]
                                                    font-semibold
                                                    hover:bg-[#B6C95C]
                                                    hover:text-white
                                                    transition-all
                                                "
                                            >
                                                <Download size={20} />

                                                Download

                                            </a>

                                        </div>

                                    </div>

                                </div>

                            </SwiperSlide>

                        ))}

                    </Swiper>

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
                            {t("investor:annualReports.empty.title")}
                        </h3>

                        <p className="text-gray-500 mt-3">
                            {t("investor:annualReports.empty.description")}
                        </p>

                    </div>

                )}

            </div>
        </motion.section>
    );
}