import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ProductCard({
    title,
    subtitle,
    image,
    color,
    features = [],
    tags = [],
}) {

    const { t } = useTranslation("product");

    return (
        <div
            className="
                relative
                rounded-3xl
                overflow-hidden
                min-h-[520px]
                shadow-xl
                group
            "
        >
            <img
                src={image}
                alt={title}
                className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                "
            />

            <div
                className={`absolute inset-0 bg-gradient-to-br ${color}`}
            />

            <div className="relative z-10 p-10 flex flex-col h-full text-white">

                <div>

                    <h2 className="text-4xl font-bold">
                        {title}
                    </h2>

                    <p className="mt-4 text-white/80">
                        {subtitle}
                    </p>

                </div>

                <div className="mt-8 space-y-3">

                    {features.map((feature, index) => (

                        <div
                            key={index}
                            className="flex gap-3 items-start"
                        >
                            <div className="w-2 h-2 rounded-full bg-[#B6C95C] mt-3 flex-shrink-0" />

                            <span className="leading-7">
                                {feature}
                            </span>

                        </div>

                    ))}

                </div>

                <div className="flex flex-wrap gap-3 mt-8">

                    {tags.map((tag) => (

                        <span
                            key={tag}
                            className="
                                px-4
                                py-2
                                rounded-full
                                bg-white/10
                                border
                                border-white/20
                                backdrop-blur
                                text-sm
                            "
                        >
                            {tag}
                        </span>

                    ))}

                </div>

            </div>

        </div>
    );
}