import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function OfficeLocation() {
    const { t } = useTranslation("contact");
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

            <div className="max-w-7xl mx-auto px-6 mt-10">

                <h2
                    className="
                        text-center
                        text-4xl
                        font-bold
                        text-[#23478F]
                        mb-10
                    "
                >
                    {t("contact:location.title")}
                </h2>

                <div
                    className="
                        overflow-hidden
                        rounded-xl
                        border
                    "
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.144585297686!2d106.80458469999999!3d-6.2446692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f16f40749853%3A0x1c8b280d02c238f5!2sJl.%20Iskandarsyah%20I%20No.mor%2010%2C%20RT.5%2FRW.2%2C%20Melawai%2C%20Kec.%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012160!5e0!3m2!1sen!2sid!4v1785844468768!5m2!1sen!2sid"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        loading="lazy"
                    />
                </div>

            </div>

        </motion.section>
    );
}