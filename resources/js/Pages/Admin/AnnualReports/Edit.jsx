import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm, router } from "@inertiajs/react";
import {
    ArrowLeft,
    Upload,
    FileText,
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

export default function Edit({ report }) {

    const {
        data,
        setData,
        post,
        processing,
        errors,
    } = useForm({
        title: report.title ?? "",
        year: report.year ?? "",
        file: null,
        is_active: Boolean(report.is_active),
        _method: "PUT",
    });


    const submit = (e) => {
        e.preventDefault();

        post(`/admin/annual-reports/${report.id}`, {
            forceFormData: true,
        });
    };


    const deleteReport = () => {
        router.delete(`/admin/annual-reports/${report.id}`);
    };


    return (

        <AdminLayout>

            <Head title="Edit Annual Report" />

            <div className="max-w-3xl">

                {/* Header */}

                <div className="mb-8">

                    <Link
                        href="/admin/annual-reports"
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
                        Edit Annual Report
                    </h1>


                    <p className="text-gray-500 mt-1">
                        Perbarui informasi laporan tahunan perusahaan.
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
                            Judul Laporan
                        </label>

                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) =>
                                setData(
                                    "title",
                                    e.target.value
                                )
                            }
                            placeholder="Contoh: Annual Report 2025"
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


                    {/* Tahun */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tahun
                        </label>

                        <input
                            type="number"
                            min="1900"
                            max="2100"
                            value={data.year}
                            onChange={(e) =>
                                setData(
                                    "year",
                                    e.target.value
                                )
                            }
                            placeholder="Contoh: 2025"
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

                        {errors.year && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.year}
                            </p>
                        )}

                    </div>


                    {/* File Saat Ini */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            File Saat Ini
                        </label>


                        {report.file ? (

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-4
                                    p-4
                                    rounded-xl
                                    border
                                    border-gray-200
                                    bg-gray-50
                                "
                            >

                                <div
                                    className="
                                        w-12
                                        h-12
                                        rounded-xl
                                        bg-red-50
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >

                                    <FileText
                                        size={24}
                                        className="text-red-500"
                                    />

                                </div>


                                <div className="flex-1 min-w-0">

                                    <p className="text-sm font-medium text-gray-700">
                                        Laporan Tahunan
                                    </p>

                                    <p className="text-xs text-gray-500 mt-1 truncate">
                                        {report.file}
                                    </p>

                                </div>

                            </div>

                        ) : (

                            <div
                                className="
                                    p-4
                                    rounded-xl
                                    bg-gray-50
                                    border
                                    border-gray-200
                                    text-sm
                                    text-gray-400
                                "
                            >
                                Belum ada file laporan.
                            </div>

                        )}

                    </div>


                    {/* Upload File */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Ganti File Laporan
                        </label>


                        <label
                            className="
                                flex
                                flex-col
                                items-center
                                justify-center
                                w-full
                                h-52
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
                                Klik untuk mengganti file laporan
                            </span>

                            <span className="text-xs text-gray-400 mt-1">
                                PDF · Maks. 5MB
                            </span>

                            <span className="text-xs text-[#7A9433] font-medium mt-1">
                                Gunakan file PDF dengan kualitas terbaik
                            </span>


                            <input
                                type="file"
                                accept=".pdf,application/pdf"
                                className="hidden"
                                onChange={(e) =>
                                    setData(
                                        "file",
                                        e.target.files[0]
                                    )
                                }
                            />

                        </label>


                        {data.file && (

                            <div
                                className="
                                    mt-3
                                    flex
                                    items-center
                                    gap-2
                                    text-sm
                                    text-gray-500
                                "
                            >

                                <FileText size={16} />

                                <span>
                                    File baru:{" "}
                                    <span className="font-medium">
                                        {data.file.name}
                                    </span>
                                </span>

                            </div>

                        )}


                        {errors.file && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.file}
                            </p>
                        )}

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
                                    Aktifkan laporan
                                </p>

                                <p className="text-xs text-gray-500 mt-0.5">
                                    Tampilkan laporan ini pada halaman website.
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

                                    Hapus Laporan

                                </button>

                            </AlertDialogTrigger>


                            <AlertDialogContent>

                                <AlertDialogHeader>

                                    <AlertDialogTitle>
                                        Hapus Laporan?
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        Laporan yang dihapus tidak dapat
                                        dikembalikan. Apakah Anda yakin ingin
                                        menghapus laporan ini?
                                    </AlertDialogDescription>

                                </AlertDialogHeader>


                                <AlertDialogFooter>

                                    <AlertDialogCancel>
                                        Batal
                                    </AlertDialogCancel>


                                    <AlertDialogAction
                                        onClick={deleteReport}
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
                                href="/admin/annual-reports"
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