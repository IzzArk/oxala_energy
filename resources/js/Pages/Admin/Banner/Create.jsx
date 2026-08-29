import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/react";
import { ArrowLeft, Upload } from "lucide-react";

export default function Create() {

    const {
        data,
        setData,
        post,
        processing,
        errors,
    } = useForm({
        title: "",
        subtitle: "",
        description: "",
        button_text: "",
        button_link: "",
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();

        post("/admin/banner");
    };

    return (
        <AdminLayout>

            <div className="max-w-3xl">

                {/* Header */}

                <div className="mb-8">

                    <a
                        href="/admin/banner"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            text-gray-500
                            hover:text-[#23478F]
                            transition
                        "
                    >
                        <ArrowLeft size={18} />

                        Kembali
                    </a>

                    <h1 className="text-2xl font-bold text-[#23478F] mt-4">
                        Tambah Banner
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Tambahkan banner baru untuk ditampilkan pada halaman website.
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
                        p-8
                        space-y-6
                    "
                >

                    {/* Judul */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Judul Banner
                        </label>

                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) =>
                                setData("title", e.target.value)
                            }
                            className="
                                w-full
                                border
                                border-gray-200
                                rounded-xl
                                px-4
                                py-3
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[#B6C95C]
                                focus:border-[#B6C95C]
                                transition
                            "

                        />

                        {errors.title && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.title}
                            </p>
                        )}

                    </div>


                    {/* Sub Judul */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Sub Judul
                        </label>

                        <input
                            type="text"
                            value={data.subtitle}
                            onChange={(e) =>
                                setData("subtitle", e.target.value)
                            }
                            className="
                                w-full
                                border
                                border-gray-200
                                rounded-xl
                                px-4
                                py-3
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[#B6C95C]
                                focus:border-[#B6C95C]
                                transition
                            "

                        />

                        {errors.subtitle && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.subtitle}
                            </p>
                        )}

                    </div>


                    {/* Deskripsi */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Deskripsi
                        </label>

                        <textarea
                            rows={5}
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            className="
                                w-full
                                border
                                border-gray-200
                                rounded-xl
                                px-4
                                py-3
                                resize-none
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[#B6C95C]
                                focus:border-[#B6C95C]
                                transition
                            "
                        />

                        {errors.description && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.description}
                            </p>
                        )}

                    </div>


                    {/* Button Text */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Button Text
                        </label>

                        <input
                            type="text"
                            value={data.button_text}
                            onChange={(e) =>
                                setData("button_text", e.target.value)
                            }
                            className="
                                w-full
                                border
                                border-gray-200
                                rounded-xl
                                px-4
                                py-3
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[#B6C95C]
                                focus:border-[#B6C95C]
                                transition
                            "
                        />

                        {errors.button_text && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.button_text}
                            </p>
                        )}

                    </div>


                    {/* Button Link */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Button Link
                        </label>

                        <input
                            type="text"
                            value={data.button_link}
                            onChange={(e) =>
                                setData("button_link", e.target.value)
                            }
                            className="
                                w-full
                                border
                                border-gray-200
                                rounded-xl
                                px-4
                                py-3
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[#B6C95C]
                                focus:border-[#B6C95C]
                                transition
                            "
                        />

                        {errors.button_link && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.button_link}
                            </p>
                        )}

                    </div>


                    {/* Image */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Foto Banner
                        </label>

                        <label
                            className="
                                flex
                                flex-col
                                items-center
                                justify-center
                                w-full
                                h-56
                                border-2
                                border-dashed
                                border-gray-200
                                rounded-xl
                                cursor-pointer
                                hover:border-[#B6C95C]
                                hover:bg-[#FAFCF3]
                                transition
                            "
                        >

                            <Upload
                                size={32}
                                className="text-gray-400 mb-3"
                            />

                            <span className="text-sm text-gray-600">
                                Klik untuk upload foto banner
                            </span>

                            <span className="text-xs text-gray-400 mt-1">
                                JPG, PNG, WEBP · Maks. 5MB
                            </span>

                            <span className="text-xs text-[#7A9433] font-medium mt-1">
                                Gunakan gambar dengan kualitas terbaik
                            </span>

                            <input
                                type="file"
                                accept="image/jpeg,image/png,image/webp"
                                className="hidden"
                                onChange={(e) =>
                                    setData(
                                        "image",
                                        e.target.files[0]
                                    )
                                }
                            />

                        </label>

                        {data.image && (
                            <p className="text-sm text-gray-500 mt-2">
                                {data.image.name}
                            </p>
                        )}

                        {errors.image && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.image}
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
                                disabled:cursor-not-allowed
                                transition
                            "
                        >
                            {processing
                                ? "Menyimpan..."
                                : "Simpan Banner"}
                        </button>

                    </div>

                </form>

            </div>

        </AdminLayout>
    );
}