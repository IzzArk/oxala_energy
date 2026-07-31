import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ProductCategories() {
    const { t } = useTranslation("product");
    const products = [
        {
            title: t("product:categories.items.renewable.title"),
            description:
                t("product:categories.items.renewable.description"),
            image:
                "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: t("product:categories.items.pipeline.title"),
            description:
                t("product:categories.items.pipeline.description"),
            image:
                "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80",
        },
        {
            title: t("product:categories.items.logistic.title"),
            description:
                t("product:categories.items.logistic.description"),
            image:
                "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        },
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
            className="py-24 bg-[#ffffff]"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <h2 className="text-4xl font-bold text-[#23478F]">
                        {t("product:categories.title")}
                    </h2>

                    <div className="w-20 h-1 bg-[#B6C95C] rounded-full mx-auto mt-5"></div>

                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                        {t("product:categories.description")}
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {products.map((item, index) => (
                        <ProductCard
                            key={index}
                            {...item}
                        />
                    ))}

                </div>

            </div>
        </motion.section>
    );
}