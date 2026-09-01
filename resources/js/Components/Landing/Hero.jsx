import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";

export default function Hero({ banners }) {
    const { t } = useTranslation("home");
    const [activeBanner, setActiveBanner] = useState(banners?.[0] ?? null);

    return (
        <>
            <section
                className="
                    relative
                    h-[100svh]
                    min-h-[500px]
                    lg:min-h-[850px]
                    overflow-hidden
                "
            >
                {/* =========================
                    BANNER SLIDER
                ========================== */}

                <Swiper
                    modules={[
                        Autoplay,
                        Pagination,
                        Navigation,
                    ]}
                    onSlideChange={(swiper) => {
                        setActiveBanner(
                            banners[swiper.realIndex]
                        );
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: ".hero-prev",
                        nextEl: ".hero-next",
                    }}
                    loop
                    className="absolute inset-0 h-full w-full"
                >
                    {banners.map((banner) => (
                        <SwiperSlide key={banner.id}>
                            <img
                                src={`/storage/${banner.image}`}
                                alt={banner.title}
                                className="
                                    w-full
                                    h-full
                                    object-cover
                                "
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* =========================
                    DARK OVERLAY
                ========================== */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-black/60
                        z-10
                    "
                />


                {/* =========================
                    HERO CONTENT
                ========================== */}

                <div className="absolute inset-0 z-20">

                    <div
                        className="
                            max-w-7xl
                            mx-auto
                            h-full
                            px-6
                            flex
                            items-center
                        "
                    >

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -60,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                            className="
                                max-w-3xl
                                pt-24
                                lg:pt-0
                                pb-12
                                lg:pb-40
                            "
                        >

                            {/* Badge */}

                            <span
                                className="
                                    inline-flex
                                    items-center
                                    rounded-full
                                    border
                                    border-[#B6C95C]
                                    bg-[#B6C95C]/20
                                    backdrop-blur
                                    px-5
                                    py-2
                                    text-xs
                                    md:text-sm
                                    font-semibold
                                    uppercase
                                    tracking-[0.25em]
                                    text-[#DCE89A]
                                "
                            >
                                {t("home:hero.badge")}
                            </span>


                            {/* Title */}

                            <h1
                                className="
                                    mt-6
                                    text-white
                                    font-bold
                                    leading-tight
                                    text-3xl
                                    sm:text-4xl
                                    lg:text-5xl
                                "
                            >
                                {t("home:hero.title1")}

                                <br />

                                {t("home:hero.title2")}

                                <span className="block text-[#B6C95C]">
                                    {t("home:hero.titleHighlight")}
                                </span>
                            </h1>


                            {/* Description */}

                            <p
                                className="
                                    mt-6
                                    max-w-2xl
                                    text-gray-200
                                    text-base
                                    sm:text-lg
                                    lg:text-xl
                                    leading-8
                                "
                            >
                                {t("home:hero.description")}
                            </p>


                            {/* Buttons */}

                            <div
                                className="
                                    mt-8
                                    flex
                                    flex-col
                                    sm:flex-row
                                    gap-4
                                "
                            >

                                {/* Product */}

                                <a
                                    href="/produk"
                                    className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        gap-3
                                        rounded-xl
                                        bg-[#B6C95C]
                                        px-8
                                        py-4
                                        font-semibold
                                        text-white
                                        hover:bg-[#9CB548]
                                        transition
                                    "
                                >
                                    {t("home:hero.productButton")}

                                    <ArrowRight size={18} />
                                </a>


                                {/* Contact */}

                                <a
                                    href="/hubungi-kami"
                                    className="
                                        inline-flex
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border
                                        border-white/30
                                        bg-white/10
                                        backdrop-blur
                                        px-8
                                        py-4
                                        font-semibold
                                        text-white
                                        hover:bg-white
                                        hover:text-[#23478F]
                                        transition
                                    "
                                >
                                    {t("home:hero.investorButton")}
                                </a>

                                {activeBanner?.button_text && activeBanner?.button_link && (
                                    <a
                                        href={activeBanner.button_link}
                                        className="
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-[#B6C95C]
            px-8
            py-4
            font-semibold
            text-white
            hover:bg-[#9CB548]
            transition
        "
                                    >
                                        {activeBanner.button_text}

                                        <ArrowRight size={18} />
                                    </a>
                                )}

                            </div>

                        </motion.div>

                    </div>

                </div>


                {/* =========================
                    PREVIOUS ARROW
                ========================== */}

                <button
                    type="button"
                    className="
                        hero-prev

                        absolute
                        left-4
                        lg:left-8
                        top-1/2
                        -translate-y-1/2

                        z-30

                        w-12
                        h-12
                        lg:w-14
                        lg:h-14

                        rounded-full

                        border
                        border-white/30

                        bg-black/20
                        backdrop-blur

                        flex
                        items-center
                        justify-center

                        text-white

                        hover:bg-[#B6C95C]
                        hover:border-[#B6C95C]

                        transition-all
                        duration-300
                    "
                    aria-label="Previous banner"
                >
                    <ChevronLeft
                        size={28}
                        strokeWidth={2}
                    />
                </button>


                {/* =========================
                    NEXT ARROW
                ========================== */}

                <button
                    type="button"
                    className="
                        hero-next

                        absolute
                        right-4
                        lg:right-8
                        top-1/2
                        -translate-y-1/2

                        z-30

                        w-12
                        h-12
                        lg:w-14
                        lg:h-14

                        rounded-full

                        border
                        border-white/30

                        bg-black/20
                        backdrop-blur

                        flex
                        items-center
                        justify-center

                        text-white

                        hover:bg-[#B6C95C]
                        hover:border-[#B6C95C]

                        transition-all
                        duration-300
                    "
                    aria-label="Next banner"
                >
                    <ChevronRight
                        size={28}
                        strokeWidth={2}
                    />
                </button>


                {/* =========================
                    SCROLL INDICATOR
                ========================== */}

                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.8,
                    }}
                    className="
                        hidden
                        xl:flex
                        absolute
                        right-8
                        bottom-8
                        z-20
                        flex-col
                        items-center
                        gap-3
                        text-white
                    "
                >

                    <span
                        className="
                            text-xs
                            uppercase
                            tracking-[0.35em]
                            text-white/80
                        "
                    >
                        Scroll
                    </span>


                    <div
                        className="
                            w-[2px]
                            h-14
                            bg-white/30
                            overflow-hidden
                        "
                    >

                        <motion.div
                            animate={{
                                y: [-20, 55],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                            }}
                            className="
                                h-5
                                bg-[#B6C95C]
                            "
                        />

                    </div>

                </motion.div>

            </section>
        </>
    );
}