import { motion } from "framer-motion";
import NewsCard from "./NewsCard";

export default function NewsGrid({ news }) {
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
            className="pb-24">

            <div className="max-w-7xl mx-auto px-6">

                <div
                    className="
                        grid
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-8
                    "
                >

                    {news.map((item) => (
                        <NewsCard
                            key={item.id}
                            news={item}
                        />
                    ))}

                </div>

            </div>

        </motion.section>
    );
}