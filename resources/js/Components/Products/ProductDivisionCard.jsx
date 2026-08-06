import { ArrowRight } from "lucide-react";

export default function ProductDivisionCard({
    icon: Icon,
    title,
    subtitle,
    items,
    tags,
    color = "blue"
}) {

    const styles = {
        blue: {
            bg: "bg-[#23478F]",
            hover: "group-hover:bg-[#2E5CB3]"
        },
        red: {
            bg: "bg-[#A63C2F]",
            hover: "group-hover:bg-[#B94739]"
        }
    };

    return (
        <div
            className={`
                group
                ${styles[color].bg}
                rounded-3xl
                p-10
                text-white
                relative
                overflow-hidden
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
            `}
        >

            {/* Background Decoration */}

            <div
                className="
                    absolute
                    -right-20
                    -top-20
                    w-64
                    h-64
                    rounded-full
                    bg-white/5
                "
            />

            <div
                className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    mb-6
                "
            >
                <Icon size={28} />
            </div>

            <h3 className="text-3xl font-bold">
                {title}
            </h3>

            <p className="text-white/80 mt-2 mb-7">
                {subtitle}
            </p>

            <ul className="space-y-3">

                {items.map((item, index) => (
                    <li
                        key={index}
                        className="flex gap-3"
                    >
                        <span>•</span>
                        <span>{item}</span>
                    </li>
                ))}

            </ul>

            <div className="flex flex-wrap gap-2 mt-8">

                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="
                            px-4
                            py-2
                            rounded-full
                            bg-white/10
                            border
                            border-white/20
                            text-sm
                        "
                    >
                        {tag}
                    </span>
                ))}

            </div>

            <button
                className="
                    mt-10
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-white
                "
            >
                Lihat Detail
                <ArrowRight size={18} />
            </button>

        </div>
    );
}