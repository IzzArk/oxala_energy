import { Head, useForm } from "@inertiajs/react";
import Logo from "../../../Assets/Oxala-Logo.png"

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Head title="Login Admin" />

            <div
                className="
                    min-h-screen
                    flex
                    items-center
                    justify-center
                    bg-gray-100
                    px-4
                "
            >
                <div
                    className="
                        w-full
                        max-w-md
                        bg-white
                        rounded-2xl
                        shadow-xl
                        p-8
                    "
                >
                    {/* Logo */}

                    <div className="text-center mb-8">

                        <img
                            src={Logo}
                            alt="Oxala"
                            className="
                                h-20
                                mx-auto
                                mb-4
                            "
                        />

                        <h1
                            className="
                                text-2xl
                                font-bold
                                text-[#23478F]
                            "
                        >
                            CMS Oxala
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Login untuk mengelola website
                        </p>

                    </div>

                    <form
                        onSubmit={submit}
                        className="space-y-5"
                    >
                        {/* Email */}

                        <div>

                            <label
                                className="
                                    block
                                    text-sm
                                    font-medium
                                    mb-2
                                "
                            >
                                Email
                            </label>

                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData(
                                        "email",
                                        e.target.value
                                    )
                                }
                                className="
                                    w-full
                                    border
                                    rounded-lg
                                    px-4
                                    py-3
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-[#23478F]
                                "
                            />

                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email}
                                </p>
                            )}

                        </div>

                        {/* Password */}

                        <div>

                            <label
                                className="
                                    block
                                    text-sm
                                    font-medium
                                    mb-2
                                "
                            >
                                Password
                            </label>

                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData(
                                        "password",
                                        e.target.value
                                    )
                                }
                                className="
                                    w-full
                                    border
                                    rounded-lg
                                    px-4
                                    py-3
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-[#23478F]
                                "
                            />

                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password}
                                </p>
                            )}

                        </div>

                        {/* Remember */}

                        <label
                            className="
                                flex
                                items-center
                                gap-2
                                text-sm
                            "
                        >
                            <input
                                type="checkbox"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData(
                                        "remember",
                                        e.target.checked
                                    )
                                }
                            />

                            Remember Me

                        </label>

                        {/* Button */}

                        <button
                            type="submit"
                            disabled={processing}
                            className="
                                w-full
                                bg-[#23478F]
                                hover:bg-[#1c3a73]
                                text-white
                                py-3
                                rounded-lg
                                font-medium
                                transition
                            "
                        >
                            {processing
                                ? "Memproses..."
                                : "Masuk ke Dashboard"}
                        </button>

                    </form>

                </div>
            </div>
        </>
    );
}