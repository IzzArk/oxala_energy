import { useForm } from "@inertiajs/react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

import GeneralForm from "./Form/GeneralForm";
import RenewableForm from "./Form/RenewableForm";

export default function ContactForm() {
    const { t } = useTranslation("contact");

    const {
        data,
        setData,
        post,
        processing,
        reset,
        errors,
    } = useForm({
        name: "",
        email: "",
        category: "general",
        subject: "",
        message: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post("/contact", {
            preserveScroll: true,

            onSuccess: () => {
                reset();

                Swal.fire({
                    icon: "success",
                    title: t("contact:form.alert.success.title"),
                    text: t("contact:form.alert.success.text"),
                    confirmButtonColor: "#23478F",
                    confirmButtonText: "OK",
                });
            },

            onError: () => {
                Swal.fire({
                    icon: "error",
                    title: t("contact:form.alert.error.title"),
                    text: t("contact:form.alert.error.text"),
                    confirmButtonColor: "#dc2626",
                });
            },
        });
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{ duration: 0.8 }}
            className="py-24 bg-[#F8FAFC]"
        >
            <div className="max-w-4xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">

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
                            mb-4
                        "
                    >
                        {t("contact:form.badge")}
                    </span>

                    <h2 className="text-4xl font-bold text-[#23478F]">
                        {t("contact:form.title")}
                    </h2>

                    <div className="w-20 h-1 bg-[#B6C95C] rounded-full mx-auto mt-5" />

                    <p className="text-gray-600 mt-6 max-w-xl mx-auto">
                        {t("contact:form.description")}
                    </p>

                </div>

                {/* Category Button */}
                <div className="flex justify-center mb-10">

                    <div
                        className="
                            inline-flex
                            p-1.5
                            bg-white
                            border
                            border-gray-200
                            rounded-xl
                            shadow-sm
                            gap-2
                        "
                    >

                        <button
                            type="button"
                            onClick={() => {
                                reset();
                                setData("category", "general");
                            }}
                            className={`
                                px-6
                                py-3
                                rounded-lg
                                text-sm
                                font-semibold
                                transition-all
                                duration-300
                                ${data.category === "general"
                                    ? "bg-[#23478F] text-white shadow-md"
                                    : "text-gray-500 hover:text-[#23478F]"
                                }
                            `}
                        >
                            General
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                reset();
                                setData(
                                    "category",
                                    "renewable-energy"
                                );
                            }}
                            className={`
                                px-6
                                py-3
                                rounded-lg
                                text-sm
                                font-semibold
                                transition-all
                                duration-300
                                ${data.category === "renewable-energy"
                                    ? "bg-[#23478F] text-white shadow-md"
                                    : "text-gray-500 hover:text-[#23478F]"
                                }
                            `}
                        >
                            Renewable Energy
                        </button>

                    </div>

                </div>

                {/* Dynamic Form */}
                {data.category === "general" ? (
                    <GeneralForm />
                ) : (
                    <RenewableForm />
                )}

            </div>
        </motion.section>
    );
}