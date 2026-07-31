import { useForm } from "@inertiajs/react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Send } from "lucide-react";
import { useTranslation } from "react-i18next";

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
            className="py-24 bg-[#F8FAFC]"
        >

            <div className="max-w-4xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

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

                    <div className="w-20 h-1 bg-[#B6C95C] rounded-full mx-auto mt-5"></div>

                    <p className="text-gray-600 mt-6 max-w-xl mx-auto">
                        {t("contact:form.description")}
                    </p>

                </div>

                {/* Form */}

                <form
                    onSubmit={submit}
                    className="
                        bg-white
                        rounded-2xl
                        border
                        border-gray-100
                        shadow-sm
                        overflow-hidden
                    "
                >

                    <div className="h-1 bg-[#B6C95C]" />

                    <div className="p-8">

                        <div className="grid md:grid-cols-2 gap-6">

                            <div>

                                <input
                                    type="text"
                                    placeholder={t("contact:form.placeholder.name")}
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-gray-300
                                        px-4
                                        py-3
                                        transition
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-[#B6C95C]
                                        focus:border-[#B6C95C]
                                    "
                                />

                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-2">
                                        {errors.name}
                                    </p>
                                )}

                            </div>

                            <div>

                                <input
                                    type="email"
                                    placeholder={t("contact:form.placeholder.email")}
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-gray-300
                                        px-4
                                        py-3
                                        transition
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-[#B6C95C]
                                        focus:border-[#B6C95C]
                                    "
                                />

                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-2">
                                        {errors.email}
                                    </p>
                                )}

                            </div>

                        </div>

                        <div className="mt-6">

                            <input
                                type="text"
                                placeholder={t("contact:form.placeholder.subject")}
                                value={data.subject}
                                onChange={(e) =>
                                    setData("subject", e.target.value)
                                }
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-gray-300
                                    px-4
                                    py-3
                                    transition
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-[#B6C95C]
                                    focus:border-[#B6C95C]
                                "
                            />

                            {errors.subject && (
                                <p className="text-red-500 text-sm mt-2">
                                    {errors.subject}
                                </p>
                            )}

                        </div>


                        <div className="mt-6">

                            <textarea
                                rows="6"
                                placeholder={t("contact:form.placeholder.message")}
                                value={data.message}
                                onChange={(e) =>
                                    setData("message", e.target.value)
                                }
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-gray-300
                                    px-4
                                    py-3
                                    resize-none
                                    transition
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-[#B6C95C]
                                    focus:border-[#B6C95C]
                                "
                            />

                            {errors.message && (
                                <p className="text-red-500 text-sm mt-2">
                                    {errors.message}
                                </p>
                            )}

                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="
                                mt-8
                                inline-flex
                                items-center
                                gap-3
                                bg-[#23478F]
                                hover:bg-[#1B376D]
                                text-white
                                px-8
                                py-3.5
                                rounded-xl
                                font-semibold
                                transition-all
                                duration-300
                                hover:shadow-lg
                                hover:shadow-[#B6C95C]/30
                                disabled:opacity-50
                                disabled:cursor-not-allowed
                            "
                        >

                            <Send size={18} />

                            {processing
                                ? t("contact:form.button.sending")
                                : t("contact:form.button.send")}

                        </button>

                    </div>

                </form>

            </div>

        </motion.section>
    );
}