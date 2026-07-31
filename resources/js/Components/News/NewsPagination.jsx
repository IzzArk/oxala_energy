import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";

export default function NewsPagination({ links }) {
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
            className="flex justify-center gap-2 py-10">

            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.url || "#"}
                    dangerouslySetInnerHTML={{
                        __html: link.label,
                    }}
                    className={`
                        px-4 py-2 rounded-md border
                        ${link.active
                            ? "bg-[#23478F] text-white"
                            : ""}
                    `}
                />
            ))}

        </motion.section>
    );
}