import { motion } from "framer-motion";
import {
    Newspaper,
    FileText,
    Calendar,
    ArrowRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function NewsInformationSection({
    news = [],
    documents = []
}) {
    const { t } = useTranslation("home");
    return (
        <section className="py-24 bg-[#F7F9FF]">
            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block bg-[#EEF4D7] text-[#7A9433] px-4 py-2 rounded-full text-sm font-semibold">
                        {t("home:newsInformation.badge")}
                    </span>

                    <h2 className="text-4xl font-bold text-[#23478F] mt-5">
                        {t("home:newsInformation.title")}
                    </h2>

                    <div className="w-24 h-1 bg-[#B6C95C] rounded-full mx-auto mt-5" />

                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                        {t("home:newsInformation.description")}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">

                    {/* BERITA */}

                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">

                        <div className="flex items-center gap-3 mb-8">

                            <div className="w-12 h-12 rounded-xl bg-[#EEF4D7] flex items-center justify-center">
                                <Newspaper className="text-[#7A9433]" />
                            </div>

                            <h3 className="text-2xl font-bold text-[#23478F]">
                                {t("home:newsInformation.news.title")}
                            </h3>

                        </div>

                        <div className="space-y-6">

                            {news.length > 0 ? (
                                news.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`/berita/${item.slug}`}
                                        className="flex gap-4 group"
                                    >
                                        <img
                                            src={
                                                item.thumbnail
                                                    ? `/storage/${item.thumbnail}`
                                                    : "/images/news-placeholder.jpg"
                                            }
                                            alt={item.title}
                                            className="w-28 h-24 rounded-xl object-cover"
                                        />

                                        <div>

                                            <h4 className="font-bold text-[#23478F] group-hover:text-[#7A9433] transition">
                                                {item.title}
                                            </h4>

                                            <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
                                                <Calendar size={16} />
                                                {new Date(item.created_at).toLocaleDateString(
                                                    "id-ID",
                                                    {
                                                        day: "numeric",
                                                        month: "long",
                                                        year: "numeric",
                                                    }
                                                )}
                                            </div>

                                        </div>
                                    </a>
                                ))
                            ) : (
                                <p className="text-gray-500">
                                    {t("home:newsInformation.news.empty")}
                                </p>
                            )}

                        </div>

                        <a
                            href="/berita"
                            className="inline-flex items-center gap-2 mt-8 text-[#23478F] font-semibold hover:text-[#7A9433]"
                        >
                            {t("home:newsInformation.news.button")}
                            <ArrowRight size={18} />
                        </a>

                    </div>

                    {/* DOKUMEN */}

                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">

                        <div className="flex items-center gap-3 mb-8">

                            <div className="w-12 h-12 rounded-xl bg-[#EEF4D7] flex items-center justify-center">
                                <FileText className="text-[#7A9433]" />
                            </div>

                            <h3 className="text-2xl font-bold text-[#23478F]">
                                {t("home:newsInformation.documents.title")}
                            </h3>

                        </div>

                        <div className="space-y-5">

                            {documents.length > 0 ? (
                                documents.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`/storage/${item.file}`}
                                        target="_blank"
                                        className="
                    block
                    border
                    rounded-2xl
                    p-5
                    hover:border-[#7A9433]
                    transition
                    group
                "
                                    >

                                        <h4 className="font-semibold text-[#23478F] group-hover:text-[#7A9433]">
                                            {item.title}
                                        </h4>

                                        <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
                                            <Calendar size={16} />

                                            {new Date(item.created_at).toLocaleDateString(
                                                "id-ID",
                                                {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                }
                                            )}
                                        </div>

                                    </a>
                                ))
                            ) : (
                                <p className="text-gray-500">
                                    {t("home:newsInformation.documents.empty")}
                                </p>
                            )}

                        </div>

                        <a
                            href="/keterbukaan-informasi"
                            className="inline-flex items-center gap-2 mt-8 text-[#23478F] font-semibold hover:text-[#7A9433]"
                        >
                            {t("home:newsInformation.documents.button")}
                            <ArrowRight size={18} />
                        </a>

                    </div>

                </div>
            </div>
        </section>
    );
}