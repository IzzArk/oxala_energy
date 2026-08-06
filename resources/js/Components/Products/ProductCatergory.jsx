import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ProductCategories() {
    const { t } = useTranslation("product");

    const products = [
        {
            title: t("product:categories.items.pipeline.title"),
            subtitle: t("product:categories.items.pipeline.subtitle"),

            image:
                "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=80",

            color: "from-[#A63E30]/90 to-[#8C3025]/90",

            features: t(
                "product:categories.items.pipeline.features",
                { returnObjects: true }
            ),

            tags: t(
                "product:categories.items.pipeline.tags",
                { returnObjects: true }
            ),
        },

        {
            title: t("product:categories.items.renewable.title"),
            subtitle: t("product:categories.items.renewable.subtitle"),

            image:
                "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1600&q=80",

            color: "from-[#23478F]/90 to-[#18386B]/90",

            features: [
                ...t(
                    "product:categories.items.renewable.features",
                    { returnObjects: true }
                ),
                ...t(
                    "product:categories.items.logistic.features",
                    { returnObjects: true }
                ),
            ],

            tags: [
                ...t(
                    "product:categories.items.renewable.tags",
                    { returnObjects: true }
                ),
                ...t(
                    "product:categories.items.logistic.tags",
                    { returnObjects: true }
                ),
            ],
        },
    ];

    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-[#23478F]">
                        {t("product:categories.title")}
                    </h2>

                    <div className="w-24 h-1 bg-[#B6C95C] rounded-full mx-auto mt-5" />

                    <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                        {t("product:categories.description")}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">

                    {products.map((item, index) => (
                        <ProductCard
                            key={index}
                            {...item}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}