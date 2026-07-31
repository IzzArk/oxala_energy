import {
    ShieldCheck,
    Cpu,
    Leaf
} from "lucide-react";

import { motion } from "framer-motion";

import image from "../../../Assets/Network.png";
import { useTranslation } from "react-i18next";

export default function Advantages() {
    const { t } = useTranslation("Home");
    const items = [
        {
            icon: ShieldCheck,
            title: t("home:advantages.items.safety.title"),
            description:
                t("home:advantages.items.safety.description")
        },
        {
            icon: Cpu,
            title: t("home:advantages.items.technology.title"),
            description:
                t("home:advantages.items.technology.description")
        },
        {
            icon: Leaf,
            title: t("home:advantages.items.sustainability.title"),
            description:
                t("home:advantages.items.sustainability.description")
        }
    ];

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
            className="py-24 bg-white"
        >

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT */}

                    <div>

                        <span
                            className="
                                inline-block
                                px-4
                                py-2
                                rounded-full
                                bg-[#EEF4D7]
                                text-[#7A9433]
                                text-sm
                                font-semibold
                                uppercase
                                tracking-wider
                                mb-5
                            "
                        >
                            {t("home:advantages.badge")}
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold text-[#23478F] leading-tight">
                            {t("home:advantages.title")}
                        </h2>

                        <div className="w-24 h-1 bg-[#B6C95C] rounded-full mt-5 mb-10"></div>

                        <div className="space-y-6">

                            {items.map((item, index) => {

                                const Icon = item.icon;

                                return (

                                    <div
                                        key={index}
                                        className="
                                            group
                                            flex
                                            gap-5
                                            p-5
                                            rounded-2xl
                                            border
                                            border-gray-100
                                            hover:border-[#B6C95C]
                                            hover:shadow-lg
                                            transition-all
                                            duration-300
                                        "
                                    >

                                        <div
                                            className="
                                                w-14
                                                h-14
                                                rounded-xl
                                                bg-[#EEF4D7]
                                                flex
                                                items-center
                                                justify-center
                                                shrink-0
                                            "
                                        >

                                            <Icon
                                                size={24}
                                                className="text-[#7A9433]"
                                            />

                                        </div>

                                        <div>

                                            <h3
                                                className="
                                                    text-xl
                                                    font-bold
                                                    text-[#23478F]
                                                    group-hover:text-[#B7CA5C]
                                                    transition-colors
                                                "
                                            >
                                                {item.title}
                                            </h3>

                                            <p className="text-gray-600 mt-2 leading-7">
                                                {item.description}
                                            </p>

                                        </div>

                                    </div>

                                );

                            })}

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div>

                        <div className="grid grid-cols-12 gap-4 lg:h-[620px]">

                            {/* Foto Besar */}
                            <div className="col-span-12 lg:col-span-7">

                                <img
                                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
                                    className="
                w-full
                h-[300px]
                lg:h-full
                object-cover
                rounded-2xl
                shadow-lg
                transition-transform
                                            duration-500
                                            hover:scale-105
            "
                                    alt=""
                                />

                            </div>

                            {/* 3 Foto Kecil */}
                            <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">

                                <img
                                    src={image}
                                    className="
                h-[180px]
                lg:flex-1
                object-cover
                rounded-2xl
                shadow-md
                transition-transform
                                            duration-500
                                            hover:scale-105
            "
                                    alt=""
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
                                    className="
                h-[180px]
                lg:flex-1
                object-cover
                rounded-2xl
                shadow-md
                transition-transform
                                            duration-500
                                            hover:scale-105
            "
                                    alt=""
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                                    className="
                h-[180px]
                lg:flex-1
                object-cover
                rounded-2xl
                shadow-md
                transition-transform
                                            duration-500
                                            hover:scale-105
            "
                                    alt=""
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </motion.section>
    );
}