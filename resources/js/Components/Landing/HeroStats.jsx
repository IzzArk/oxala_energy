import {
    Building2,
    Globe2,
    BriefcaseBusiness,
    Leaf,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
    {
        value: "25+",
        label: "Tahun Pengalaman",
        icon: Building2,
    },
    {
        value: "120+",
        label: "Proyek Terselesaikan",
        icon: BriefcaseBusiness,
    },
    {
        value: "15+",
        label: "Negara Mitra",
        icon: Globe2,
    },
    {
        value: "100%",
        label: "Komitmen ESG",
        icon: Leaf,
    },
];

export default function HeroStats() {
    return (
        <div
            className="
        grid
        grid-cols-2
        lg:grid-cols-4
        gap-4
    "
        >
            {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: index * 0.15,
                            duration: 0.6,
                        }}
                        className="
        group
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-2xl
        p-6
        transition-all
        duration-300
        hover:bg-[#B6C95C]
        hover:border-[#B6C95C]
        hover:-translate-y-2
        hover:shadow-2xl
    "
                    >
                        <div
                            className="
                                w-14
                                h-10
                                rounded-xl
                                bg-white/15
                                flex
                                items-center
                                justify-center
                                mb-5
                                transition-all
                                group-hover:bg-white/20
                            "
                        >
                            <Icon
                                size={28}
                                className="text-white"
                            />
                        </div>

                        <h2
                            className="
                                text-4xl
                                font-bold
                                text-white
                            "
                        >
                            {item.value}
                        </h2>

                        <p
                            className="
                                mt-2
                                text-sm
                                text-white/80
                                leading-6
                            "
                        >
                            {item.label}
                        </p>
                    </motion.div>
                );
            })}
        </div>
    );
}