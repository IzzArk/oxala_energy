import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";
import { Upload } from "lucide-react";

export default function Index({ settings }) {

    const {
        data,
        setData,
        post,
        processing,
        errors,
    } = useForm({
        company_name: settings.company_name || "",
        email: settings.email || "",
        phone: settings.phone || "",
        whatsapp: settings.whatsapp || "",
        address: settings.address || "",
        website: settings.website || "",
        instagram: settings.instagram || "",
        linkedin: settings.linkedin || "",
        youtube: settings.youtube || "",
        logo: null,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.settings.update"), {
            forceFormData: true,
        });
    };

    return (
        <>
            <Head title="Settings" />
            <AdminLayout>

                <div className="max-w-4xl">

                    {/* Header */}

                    <div className="mb-8">

                        <h1 className="text-2xl font-bold text-[#23478F]">
                            General Settings
                        </h1>

                        <p className="text-gray-500 mt-1">
                            Kelola informasi umum yang ditampilkan pada website.
                        </p>

                    </div>

                    <form
                        onSubmit={submit}
                        className="
                        bg-white
                        rounded-2xl
                        border
                        border-gray-100
                        shadow-sm
                        p-8
                        space-y-8
                    "
                    >

                        {/* Company */}

                        <div>

                            <h2 className="text-lg font-semibold text-[#23478F] mb-5">
                                Informasi Perusahaan
                            </h2>

                            <div className="space-y-5">

                                <div>

                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nama Perusahaan
                                    </label>

                                    <input
                                        type="text"
                                        value={data.company_name}
                                        onChange={(e) =>
                                            setData(
                                                "company_name",
                                                e.target.value
                                            )
                                        }
                                        className="w-full border rounded-xl p-3"
                                    />

                                    {errors.company_name && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.company_name}
                                        </p>
                                    )}

                                </div>

                                <div>

                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Alamat
                                    </label>

                                    <textarea
                                        rows="4"
                                        value={data.address}
                                        onChange={(e) =>
                                            setData(
                                                "address",
                                                e.target.value
                                            )
                                        }
                                        className="w-full border rounded-xl p-3 resize-none"
                                    />

                                    {errors.address && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.address}
                                        </p>
                                    )}

                                </div>

                            </div>

                        </div>

                        {/* Contact */}

                        <div>

                            <h2 className="text-lg font-semibold text-[#23478F] mb-5">
                                Kontak
                            </h2>

                            <div className="grid md:grid-cols-2 gap-5">

                                <div>

                                    <label className="block text-sm font-medium text-gray-700 mb-2">
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
                                        className="w-full border rounded-xl p-3"
                                    />

                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.email}
                                        </p>
                                    )}

                                </div>

                                <div>

                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nomor Telepon
                                    </label>

                                    <input
                                        type="text"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData(
                                                "phone",
                                                e.target.value
                                            )
                                        }
                                        className="w-full border rounded-xl p-3"
                                    />

                                </div>



                            </div>

                        </div>



                        {/* Logo */}

                        <div>

                            <h2 className="text-lg font-semibold text-[#23478F] mb-5">
                                Logo Website
                            </h2>

                            {settings.logo && (
                                <div className="mb-4">

                                    <img
                                        src={`/storage/${settings.logo}`}
                                        alt="Logo"
                                        className="h-16 object-contain"
                                    />

                                </div>
                            )}

                            <label
                                className="
                                flex
                                flex-col
                                items-center
                                justify-center
                                w-full
                                h-40
                                border-2
                                border-dashed
                                border-gray-200
                                rounded-xl
                                cursor-pointer
                                hover:border-[#B6C95C]
                            "
                            >

                                <Upload
                                    size={30}
                                    className="text-gray-400 mb-2"
                                />

                                <span className="text-sm text-gray-600">
                                    Klik untuk upload logo
                                </span>

                                <span className="text-xs text-gray-400 mt-1">
                                    JPG, PNG, WEBP · Maks. 2MB
                                </span>

                                <input
                                    type="file"
                                    accept="image/jpeg,image/png,image/webp"
                                    className="hidden"
                                    onChange={(e) =>
                                        setData(
                                            "logo",
                                            e.target.files[0]
                                        )
                                    }
                                />

                            </label>

                            {data.logo && (
                                <p className="text-sm text-gray-500 mt-2">
                                    {data.logo.name}
                                </p>
                            )}

                            {errors.logo && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.logo}
                                </p>
                            )}

                        </div>

                        {/* Submit */}

                        <div className="flex justify-end pt-4">

                            <button
                                type="submit"
                                disabled={processing}
                                className="
                                px-6
                                py-3
                                rounded-xl
                                bg-[#23478F]
                                text-white
                                font-semibold
                                hover:bg-[#18386B]
                                disabled:opacity-50
                            "
                            >
                                {processing
                                    ? "Menyimpan..."
                                    : "Simpan Settings"}
                            </button>

                        </div>

                    </form>

                </div>

            </AdminLayout>

        </>
    );
}