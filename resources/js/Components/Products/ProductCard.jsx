import { ArrowRight, Package } from "lucide-react";

export default function ProductCard({
    title,
    description,
    image,
}) {
    return (
        <div
            className="
                group
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
                flex
                flex-col
                h-full
            "
        >

            {/* Accent */}

            <div className="h-1 bg-[#B6C95C]" />

            {/* Image */}

            <div className="overflow-hidden">

                <img
                    src={image}
                    alt={title}
                    className="
                        h-60
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                    "
                />

            </div>

            <div className="p-8 flex flex-col flex-1">

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
                    Product
                </span>

                <div
                    className="
                        w-14
                        h-14
                        rounded-xl
                        bg-[#EEF4D7]
                        flex
                        items-center
                        justify-center
                        mb-6
                    "
                >

                    <Package
                        size={26}
                        className="text-[#7A9433]"
                    />

                </div>

                <h3
                    className="
                        text-2xl
                        font-bold
                        text-[#23478F]
                        group-hover:text-[#7A9433]
                        transition-colors
                        mb-4
                    "
                >
                    {title}
                </h3>

                <p className="text-gray-600 leading-7 flex-1">
                    {description}
                </p>

                <button
                    className="
                        mt-8
                        inline-flex
                        items-center
                        gap-2
                        text-[#23478F]
                        hover:text-[#7A9433]
                        font-semibold
                        transition-colors
                    "
                >
                    Pelajari Selengkapnya

                    <ArrowRight
                        size={18}
                    />

                </button>

            </div>

        </div>
    );
}