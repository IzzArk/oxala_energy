import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function CompanyHighlights() {
    const { t } = useTranslation("investor");

    const stats = [
        {
            title: t("investor:companyHighlights.items.stockCode.title"),
            subtitle: t("investor:companyHighlights.items.stockCode.subtitle"),
        },
        {
            title: t("investor:companyHighlights.items.listingYear.title"),
            subtitle: t("investor:companyHighlights.items.listingYear.subtitle"),
        },
        {
            title: t("investor:companyHighlights.items.shareComposition.title"),
            subtitle: t("investor:companyHighlights.items.shareComposition.subtitle"),
        },
        {
            title: t("investor:companyHighlights.items.companyExperience.title"),
            subtitle: t("investor:companyHighlights.items.companyExperience.subtitle"),
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: .8 }}
            className="py-24 bg-[#ffffff]"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">

                    {stats.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div
                                key={index}
                                whileHover={{
                                    y: -8,
                                }}
                                transition={{
                                    duration: .25,
                                }}
                                className="
                                    group
                                    relative
                                    bg-white
                                    rounded-2xl
                                    border
                                    border-gray-100
                                    shadow-sm
                                    hover:shadow-xl
                                    overflow-hidden
                                "
                            >

                                {/* Accent */}

                                <div className="h-1 bg-[#B6C95C]" />

                                <div className="p-8">

                                    <h3
                                        className="
                                            text-3xl
                                            font-bold
                                            text-[#23478F]
                                            leading-none
                                        "
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-4
                                            text-gray-600
                                            leading-7
                                        "
                                    >
                                        {item.subtitle}
                                    </p>

                                </div>


                            </motion.div>

                        );

                    })}

                </div>
                <div
                    className="
        mt-10
        rounded-2xl
        border
        border-[#D9E7A7]
        bg-[#F8FBEF]
        px-6
        py-5
    "
                >
                    <p className="text-sm leading-7 text-gray-600">
                        {t("investor:companyHighlights.informationNote")}
                    </p>
                </div>
            </div>
        </motion.section>
    );
}