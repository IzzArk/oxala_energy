import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";

export default function FeaturedNews({ news }) {

    if (!news) return null;

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
            className="py-20">

            <div className="max-w-7xl mx-auto px-6">

                <Link
                    href={`/berita/${news.slug}`}
                >

                    <div
                        className="
                            grid
                            lg:grid-cols-2
                            gap-10
                            items-center
                        "
                    >

                        <img
                            src={`/storage/${news.thumbnail}`}
                            className="
                                w-full
                                h-[450px]
                                object-cover
                                rounded-xl
                            "
                        />

                        <div>

                            <span
                                className="
                                    text-[#23478F]
                                    font-semibold
                                "
                            >
                                BERITA UTAMA
                            </span>

                            <h2
                                className="
                                    text-4xl
                                    font-bold
                                    mt-4
                                    mb-4
                                "
                            >
                                {news.title}
                            </h2>

                            <div
                                className="
                                    text-gray-600
                                    line-clamp-4
                                "
                                dangerouslySetInnerHTML={{
                                    __html: news.content
                                }}
                            />

                        </div>

                    </div>

                </Link>

            </div>

        </motion.section>
    );
}