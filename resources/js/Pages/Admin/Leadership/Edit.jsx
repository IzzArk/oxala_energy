import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm, router } from "@inertiajs/react";
import {
    ArrowLeft,
    Upload,
    ImagePlus,
    Trash2,
} from "lucide-react";

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

export default function Edit({ leader }) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
    } = useForm({
        name: leader.name ?? "",
        position: leader.position ?? "",
        photo: null,
        sort_order: leader.sort_order ?? "",
        is_active: Boolean(leader.is_active),
        _method: "PUT",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.leadership.update", leader.id), {
            forceFormData: true,
        });
    };

    const deleteLeader = () => {
        router.delete(`/admin/leadership/${leader.id}`);
    };

    return (
        <AdminLayout>

            <Head title="Edit Leadership" />

            <div className="max-w-4xl">

                {/* Header */}

                <div className="mb-8">

                    <Link
                        href={route("admin.leadership.index")}
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
                    </Link>

                    <h1 className="text-2xl font-bold text-[#23478F] mt-4">
                        Edit Leadership
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Perbarui informasi pimpinan perusahaan.
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

                    {/* Nama */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nama
                        </label>

                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) =>
                                setData(
                                    "name",
                                    e.target.value
                                )
                            }
                            placeholder="Masukkan nama lengkap"
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

                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name}
                            </p>
                        )}

                    </div>


                    {/* Jabatan */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Jabatan
                        </label>

                        <input
                            type="text"
                            value={data.position}
                            onChange={(e) =>
                                setData(
                                    "position",
                                    e.target.value
                                )
                            }
                            placeholder="Contoh: Komisaris Utama"
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

                        {errors.position && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.position}
                            </p>
                        )}

                    </div>


                    {/* Foto */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Foto Pimpinan
                        </label>


                        {/* Foto Saat Ini */}

                        {leader.photo && (

                            <div className="mb-4">

                                <p className="text-sm text-gray-500 mb-2">
                                    Foto saat ini
                                </p>

                                <div
                                    className="
                                        w-64
                                        aspect-[4/3]
                                        rounded-xl
                                        overflow-hidden
                                        bg-gray-100
                                        border
                                        border-gray-200
                                    "
                                >

                                    <img
                                        src={`/storage/${leader.photo}`}
                                        alt={leader.name}
                                        className="
                                            w-full
                                            h-full
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
                                Klik untuk mengganti foto
                            </span>

                            <span className="text-xs text-gray-400 mt-1">
                                JPG, JPEG, PNG · Rasio 4:3
                            </span>

                            <span className="text-xs text-gray-400">
                                Contoh: 1200 × 900 px
                            </span>

                            <span className="text-xs text-[#7A9433] font-medium mt-1">
                                Gunakan gambar dengan kualitas terbaik
                            </span>

                            <input
                                type="file"
                                accept="image/jpeg,image/png,image/jpg"
                                className="hidden"
                                onChange={(e) =>
                                    setData(
                                        "photo",
                                        e.target.files[0]
                                    )
                                }
                            />

                        </label>


                        {/* Selected File */}

                        {data.photo && (

                            <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">

                                <ImagePlus size={16} />

                                <span>
                                    File baru:{" "}
                                    <span className="font-medium">
                                        {data.photo.name}
                                    </span>
                                </span>

                            </div>

                        )}


                        {errors.photo && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.photo}
                            </p>
                        )}


                        {/* Image Note */}

                        <div
                            className="
                                mt-3
                                p-4
                                rounded-xl
                                bg-[#F7F9FF]
                                border
                                border-[#E4EAF5]
                                text-xs
                                text-gray-600
                            "
                        >
                            <strong>Catatan foto:</strong>{" "}
                            Gunakan foto dengan rasio{" "}
                            <strong>4:3</strong> agar tampilan di website
                            tetap proporsional. Disarankan menggunakan
                            ukuran <strong>1200 × 900 px</strong> atau lebih.
                        </div>

                    </div>


                    {/* Urutan */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Urutan
                        </label>

                        <input
                            type="number"
                            min="0"
                            value={data.sort_order}
                            onChange={(e) =>
                                setData(
                                    "sort_order",
                                    e.target.value
                                )
                            }
                            placeholder="Contoh: 1"
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

                        {errors.sort_order && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.sort_order}
                            </p>
                        )}

                        <p className="text-xs text-gray-400 mt-2">
                            Tentukan urutan tampil pimpinan pada halaman website.
                        </p>

                    </div>


                    {/* Status */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Status
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

                            <div>

                                <p className="text-sm font-medium text-gray-700">
                                    Aktifkan pimpinan
                                </p>

                                <p className="text-xs text-gray-500 mt-0.5">
                                    Tampilkan pimpinan ini pada halaman website.
                                </p>

                            </div>

                        </label>

                        {errors.is_active && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.is_active}
                            </p>
                        )}

                    </div>


                    {/* Actions */}

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            pt-5
                            border-t
                            border-gray-100
                        "
                    >

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

                                    Hapus Pemimpin
                                </button>

                            </AlertDialogTrigger>


                            <AlertDialogContent>

                                <AlertDialogHeader>

                                    <AlertDialogTitle>
                                        Hapus Pemimpin?
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        Data pemimpin yang dihapus tidak
                                        dapat dikembalikan. Apakah Anda yakin
                                        ingin menghapus data ini?
                                    </AlertDialogDescription>

                                </AlertDialogHeader>


                                <AlertDialogFooter>

                                    <AlertDialogCancel>
                                        Batal
                                    </AlertDialogCancel>

                                    <AlertDialogAction
                                        onClick={deleteLeader}
                                        className="bg-red-600 hover:bg-red-700"
                                    >
                                        Hapus
                                    </AlertDialogAction>

                                </AlertDialogFooter>

                            </AlertDialogContent>

                        </AlertDialog>


                        {/* Right Actions */}

                        <div className="flex items-center gap-3">

                            <Link
                                href={route("admin.leadership.index")}
                                className="
                                    px-5
                                    py-3
                                    rounded-xl
                                    border
                                    border-gray-200
                                    text-gray-600
                                    font-medium
                                    hover:bg-gray-50
                                    transition
                                "
                            >
                                Batal
                            </Link>

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
                                    : "Simpan Perubahan"}
                            </button>

                        </div>

                    </div>

                </form>

            </div>

        </AdminLayout>
    );
}