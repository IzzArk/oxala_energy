import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function InformationDocuments({
    documents,
}) {
    const { t } = useTranslation("information");
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
            className="py-24 bg-[#ffffff]"
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <span
                        className="
                            inline-block
                            bg-[#EEF4D7]
                            text-[#7A9433]
                            px-4
                            py-2
                            rounded-full
                            text-sm
                            font-semibold
                            uppercase
                            tracking-widest
                        "
                    >
                        {t("information:documents.badge")}
                    </span>

                    <h2 className="text-4xl font-bold text-[#23478F] mt-5">
                        {t("information:documents.title")}
                    </h2>

                    <div className="w-20 h-1 bg-[#B6C95C] rounded-full mx-auto mt-5"></div>

                    <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
                        {t("information:documents.description")}
                    </p>

                </div>

                {documents.length > 0 ? (

                    <div className="space-y-6">

                        {documents.map((doc) => (

                            <div
                                key={doc.id}
                                className="
                                    group
                                    bg-white
                                    rounded-2xl
                                    border
                                    border-gray-100
                                    shadow-sm
                                    hover:shadow-xl
                                    hover:border-[#B6C95C]
                                    hover:-translate-y-1
                                    transition-all
                                    duration-300
                                    overflow-hidden
                                "
                            >

                                <div className="h-1 bg-[#B6C95C]" />

                                <div
                                    className="
                                        p-6
                                        flex
                                        flex-col
                                        md:flex-row
                                        md:items-center
                                        md:justify-between
                                        gap-6
                                    "
                                >

                                    <div className="flex gap-5 items-start">

                                        <div
                                            className="
                                                w-14
                                                h-14
                                                rounded-xl
                                                bg-[#EEF4D7]
                                                flex
                                                items-center
                                                justify-center
                                                flex-shrink-0
                                            "
                                        >
                                            <FileText
                                                size={28}
                                                className="text-[#7A9433]"
                                            />
                                        </div>

                                        <div>

                                            <span
                                                className="
                                                    inline-block
                                                    px-3
                                                    py-1
                                                    rounded-full
                                                    bg-[#EEF4D7]
                                                    text-[#7A9433]
                                                    text-xs
                                                    font-semibold
                                                    uppercase
                                                    tracking-wider
                                                    mb-3
                                                "
                                            >
                                                {doc.category}
                                            </span>

                                            <h3
                                                className="
                                                    text-xl
                                                    font-bold
                                                    text-[#23478F]
                                                    group-hover:text-[#7A9433]
                                                    transition-colors
                                                "
                                            >
                                                {doc.title}
                                            </h3>

                                            {doc.description && (
                                                <p className="text-gray-600 mt-3 leading-7">
                                                    {doc.description}
                                                </p>
                                            )}

                                        </div>

                                    </div>

                                    <a
                                        href={`/storage/${doc.file}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download
                                        className="
                                            inline-flex
                                            items-center
                                            justify-center
                                            gap-3
                                            px-6
                                            py-3
                                            rounded-xl
                                            bg-[#23478F]
                                            text-white
                                            font-semibold
                                            hover:bg-[#7A9433]
                                            transition
                                            whitespace-nowrap
                                        "
                                    >
                                        <Download size={20} />

                                        {t("information:documents.download")}
                                    </a>

                                </div>

                            </div>

                        ))}

                    </div>

                ) : (

                    <div
                        className="
                            bg-white
                            rounded-2xl
                            border
                            border-dashed
                            border-[#B6C95C]
                            py-16
                            text-center
                        "
                    >

                        <FileText
                            size={50}
                            className="mx-auto text-[#7A9433] mb-5"
                        />

                        <h3 className="text-2xl font-semibold text-[#23478F]">
                            {t("information:documents.emptyTitle")}
                        </h3>

                        <p className="text-gray-500 mt-3 max-w-lg mx-auto leading-7">
                            {t("information:documents.emptyDescription")}
                        </p>

                    </div>

                )}

            </div>
        </motion.section>
    );
}