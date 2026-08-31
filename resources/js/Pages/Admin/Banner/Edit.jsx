import AdminLayout from "@/Layouts/AdminLayout";
import { useForm, router } from "@inertiajs/react";
import { ArrowLeft, Upload, Trash2 } from "lucide-react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";

export default function Edit({ banner }) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
    } = useForm({
        _method: "PUT",
        title: banner.title || "",
        subtitle: banner.subtitle || "",
        description: banner.description || "",
        button_text: banner.button_text || "",
        button_link: banner.button_link || "",
        is_active: Boolean(banner.is_active),
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();

        post(`/admin/banner/${banner.id}`);
    };

    const deleteBanner = () => {
        router.delete(`/admin/banner/${banner.id}`);
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
                        Edit Banner
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Perbarui informasi banner yang ditampilkan pada halaman website.
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

                        {/* Current Image */}

                        {banner.image && (
                            <div className="mb-4">

                                <p className="text-sm text-gray-500 mb-2">
                                    Foto saat ini
                                </p>

                                <div className="relative w-full overflow-hidden rounded-xl border border-gray-200">

                                    <img
                                        src={`/storage/${banner.image}`}
                                        alt={banner.title}
                                        className="
                                            w-full
                                            h-56
                                            object-cover
                                        "
                                    />

                                </div>

                            </div>
                        )}


                        {/* Upload */}

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
                                Klik untuk mengganti foto banner
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
                                File baru:{" "}
                                <span className="font-medium">
                                    {data.image.name}
                                </span>
                            </p>
                        )}

                        {errors.image && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.image}
                            </p>
                        )}

                    </div>


                    {/* Status */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Status Banner
                        </label>

                        <label
                            className="
                                flex
                                items-center
                                gap-3
                                w-fit
                                cursor-pointer
                                select-none
                            "
                        >

                            <input
                                type="checkbox"
                                checked={data.is_active}
                                onChange={(e) =>
                                    setData(
                                        "is_active",
                                        e.target.checked
                                    )
                                }
                                className="
                                    w-4
                                    h-4
                                    rounded
                                    border-gray-300
                                    text-[#23478F]
                                    focus:ring-[#B6C95C]
                                "
                            />

                            <span className="text-sm text-gray-700">
                                Aktifkan banner
                            </span>

                        </label>

                    </div>


                    {/* Action */}

                    <div className="flex items-center justify-between pt-4">

                        {/* Delete */}

                        <AlertDialog>

                            <AlertDialogTrigger asChild>

                                <button
                                    type="button"
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        px-5
                                        py-3
                                        rounded-xl
                                        border
                                        border-red-200
                                        text-red-600
                                        font-semibold
                                        hover:bg-red-50
                                        transition
                                    "
                                >
                                    <Trash2 size={18} />

                                    Hapus Banner
                                </button>

                            </AlertDialogTrigger>


                            <AlertDialogContent>

                                <AlertDialogHeader>

                                    <AlertDialogTitle>
                                        Hapus Banner?
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        Banner yang dihapus tidak dapat
                                        dikembalikan. Apakah Anda yakin ingin
                                        menghapus banner ini?
                                    </AlertDialogDescription>

                                </AlertDialogHeader>


                                <AlertDialogFooter>

                                    <AlertDialogCancel>
                                        Batal
                                    </AlertDialogCancel>

                                    <AlertDialogAction
                                        onClick={deleteBanner}
                                        className="bg-red-600 hover:bg-red-700"
                                    >
                                        Hapus
                                    </AlertDialogAction>

                                </AlertDialogFooter>

                            </AlertDialogContent>

                        </AlertDialog>


                        {/* Update */}

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
                                : "Update Banner"}
                        </button>

                    </div>

                </form>

            </div>

        </AdminLayout>
    );
}