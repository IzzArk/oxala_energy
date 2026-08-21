import { useForm } from "@inertiajs/react";
import Swal from "sweetalert2";
import { Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function GeneralForm() {
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

                    {/* Name */}
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

                    {/* Email */}
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

                {/* Subject */}
                <div className="mt-6">
                    <select
                        value={data.subject}
                        onChange={(e) =>
                            setData("subject", e.target.value)
                        }
                        className="
                        w-full
                        rounded-xl
                        border
                        border-gray-300
                        bg-white
                        px-4
                        py-3
                        text-gray-700
                        transition
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#B6C95C]
                        focus:border-[#B6C95C]
                    "
                    >
                        <option value="" disabled>
                            {t("contact:form.placeholder.subject")}
                        </option>

                        <option value="mining">
                            Mining
                        </option>

                        <option value="energy">
                            Energy
                        </option>

                        <option value="carbon">
                            Carbon
                        </option>
                    </select>

                    {errors.subject && (
                        <p className="text-red-500 text-sm mt-2">
                            {errors.subject}
                        </p>
                    )}
                </div>

                {/* Message */}
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

                {/* Button */}
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
    );

}
