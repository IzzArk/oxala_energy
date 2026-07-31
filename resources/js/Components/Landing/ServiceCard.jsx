import { ArrowRight } from "lucide-react";
export default function ServiceCard({
    icon: Icon,
    title,
    description,
    image,
    large,
    horizontal
}) {


    if (horizontal) {
        return (
            <div
                className="
                    group
                    bg-white
                    border
                    border-gray-100
                    rounded-2xl
                    overflow-hidden
                    shadow-sm
                    hover:shadow-xl
                    hover:-translate-y-1
                    transition-all
                    duration-300
                "
            >

                {/* Accent */}
                <div className="h-1 bg-[#B6C95C]" />

                <div className="flex flex-col lg:flex-row">

                    <div className="flex-1 p-6 lg:p-8">

                        <span
                            className="
                                inline-block
                                mb-5
                                px-3
                                py-1
                                rounded-full
                                text-xs
                                font-semibold
                                uppercase
                                tracking-wider
                                bg-[#EEF4D7]
                                text-[#7A9433]
                            "
                        >
                            Service
                        </span>

                        <div
                            className="
                                w-12
                                h-12
                                lg:w-14
                                lg:h-14
                                rounded-xl
                                bg-[#EEF4D7]
                                flex
                                items-center
                                justify-center
                                mb-6
                            "
                        >
                            <Icon
                                size={24}
                                className="text-[#7A9433]"
                            />
                        </div>

                        <h3
                            className="
                                text-xl
                                lg:text-2xl
                                font-bold
                                text-[#23478F]
                                group-hover:text-[#7A9433]
                                transition-colors
                                mb-4
                            "
                        >
                            {title}
                        </h3>

                        <p className="text-gray-600 text-sm lg:text-base leading-7">
                            {description}
                        </p>

                    </div>

                    <div
                        className="
                            w-full
                            lg:w-80
                            flex-shrink-0
                            overflow-hidden
                        "
                    >
                        <img
                            src={image}
                            alt={title}
                            className="
                                w-full
                                h-56
                                lg:h-full
                                object-cover
                                transition-transform
                                duration-500
                                group-hover:scale-105
                            "
                        />
                    </div>

                </div>

            </div>
        );
    }

    return (
        <div
            className={`
                group
                bg-white
                border
                border-gray-100
                rounded-2xl
                overflow-hidden
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                flex
                flex-col
                h-full
                ${large ? "lg:min-h-[430px]" : ""}
            `}
        >

            {/* Accent */}
            <div className="h-1 bg-[#B6C95C]" />

            {image && (

                <div className="overflow-hidden">

                    <img
                        src={image}
                        alt={title}
                        className="
                            w-full
                            h-52
                            lg:h-56
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-105
                        "
                    />

                </div>

            )}

            <div className="p-6 lg:p-8 flex flex-col flex-1">

                <span
                    className="
                        inline-block
                        w-fit
                        mb-5
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                        bg-[#EEF4D7]
                        text-[#7A9433]
                    "
                >
                    Service
                </span>

                <div
                    className="
                        w-12
                        h-12
                        lg:w-14
                        lg:h-14
                        rounded-xl
                        bg-[#EEF4D7]
                        flex
                        items-center
                        justify-center
                        mb-6
                    "
                >
                    <Icon
                        size={24}
                        className="text-[#7A9433]"
                    />
                </div>

                <h3
                    className="
                        text-xl
                        lg:text-2xl
                        font-bold
                        text-[#23478F]
                        group-hover:text-[#7A9433]
                        transition-colors
                        mb-4
                    "
                >
                    {title}
                </h3>

                <p className="text-gray-600 text-sm lg:text-base leading-7 flex-1">
                    {description}
                </p>

                {large && (
                    <a
                        href="#"
                        className="
                            mt-8
                            inline-flex
                            items-center
                            gap-2
                            font-semibold
                            text-[#23478F]
                            hover:text-[#7A9433]
                            transition-colors
                        "
                    >
                        Pelajari Selengkapnya

                        <ArrowRight size={18} />
                    </a>
                )}

            </div>

        </div>
    );
}