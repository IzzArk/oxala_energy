import { Link } from "@inertiajs/react";
import {
    CalendarDays,
    ArrowRight
} from "lucide-react";

export default function NewsCard({ news }) {
    return (
        <Link
            href={`/berita/${news.slug}`}
            className="
                group
                block
                bg-white
                rounded-2xl
                overflow-hidden
                border
                border-gray-100
                shadow-sm
                hover:shadow-xl
                hover:border-[#B6C95C]
                hover:-translate-y-2
                transition-all
                duration-300
                h-full
            "
        >

            {/* Accent */}

            <div className="h-1 bg-[#B6C95C]" />

            {/* Thumbnail */}

            <div className="overflow-hidden">

                <img
                    src={`/storage/${news.thumbnail}`}
                    alt={news.title}
                    className="
                        w-full
                        h-60
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                    "
                />

            </div>

            <div className="p-7 flex flex-col h-full">

                {/* Badge */}

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
                    News
                </span>

                {/* Date */}

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-gray-500
                        mb-4
                    "
                >

                    <CalendarDays
                        size={16}
                        className="text-[#7A9433]"
                    />

                    {new Date(news.published_at).toLocaleDateString(
                        "id-ID",
                        {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        }
                    )}

                </div>

                {/* Title */}

                <h3
                    className="
                        text-2xl
                        font-bold
                        text-[#23478F]
                        group-hover:text-[#7A9433]
                        transition-colors
                        line-clamp-2
                        mb-4
                    "
                >
                    {news.title}
                </h3>

                {/* Excerpt */}

                <p className="text-gray-600 leading-7 line-clamp-3 flex-1">

                    {news.excerpt ??
                        news.content
                            ?.replace(/<[^>]+>/g, "")
                            .substring(0, 120) + "..."}

                </p>

                {/* Button */}

                <div
                    className="
                        mt-8
                        inline-flex
                        items-center
                        gap-2
                        font-semibold
                        text-[#23478F]
                        group-hover:text-[#7A9433]
                        transition-colors
                    "
                >

                    Baca Selengkapnya

                    <ArrowRight
                        size={18}
                    />

                </div>

            </div>

        </Link>
    );
}