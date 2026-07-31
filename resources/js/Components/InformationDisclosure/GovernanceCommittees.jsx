import { motion } from "framer-motion";
export default function GovernanceCommittees() {

    const committees = [
        "Komite Audit",
        "Komite Manajemen Risiko",
        "Komite Nominasi dan Remunerasi"
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
            className="bg-gray-50 py-24">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-center text-4xl font-bold text-[#23478F] mb-16">
                    Komite Pendukung
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    {committees.map((item, index) => (
                        <div
                            key={index}
                            className="
                                bg-white
                                p-8
                                rounded-xl
                                border
                                text-center
                            "
                        >
                            {item}
                        </div>
                    ))}

                </div>

            </div>

        </motion.section>
    );
}