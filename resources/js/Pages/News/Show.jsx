import Navbar from "@/Components/Common/Navbar";
import Footer from "@/Components/Common/Footer";
import { CalendarDays } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Show({ news }) {

    const images = [
        {
            id: "thumbnail",
            image: news.thumbnail,
        },
        ...(news.images || []),
    ];

    return (
        <>
            <Navbar />

            <article className="py-20">

                <div className="max-w-4xl mx-auto px-6">

                    {/* Gallery */}

                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{
                            clickable: true,
                        }}
                        className="rounded-xl overflow-hidden mb-10"
                    >

                        {images.map((img) => (

                            <SwiperSlide key={img.id}>

                                <img
                                    src={`/storage/${img.image}`}
                                    alt={news.title}
                                    className="
                                        w-full
                                        h-[250px]
                                        md:h-[400px]
                                        lg:h-[500px]
                                        object-cover
                                    "
                                />

                            </SwiperSlide>

                        ))}

                    </Swiper>

                    {/* Title */}

                    <h1
                        className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-[#23478F]
                            mb-4
                        "
                    >
                        {news.title}
                    </h1>

                    {/* Date */}

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-gray-500
                            mb-8
                        "
                    >
                        <CalendarDays
                            size={18}
                            className="text-[#7A9433]"
                        />

                        <span>
                            Dipublikasikan pada{" "}
                            {new Date(news.published_at).toLocaleDateString(
                                "id-ID",
                                {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                }
                            )}
                        </span>
                    </div>

                    {/* Content */}

                    <div
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{
                            __html: news.content,
                        }}
                    />

                </div>

            </article>

            <Footer />
        </>
    );
}