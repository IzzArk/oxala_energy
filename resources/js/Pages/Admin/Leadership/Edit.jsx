import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { ArrowLeft, Upload, UserRound } from "lucide-react";
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
} from "@/components/ui/alert-dialog";

export default function Edit({ leader }) {
    const { data, setData, post, processing, errors } = useForm({
        name: leader.name ?? "",
        position: leader.position ?? "",
        image: null,
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

            <div className="p-6 max-w-4xl">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <Link
                        href={route("admin.leadership.index")}
                        className="
                            w-10
                            h-10
                            rounded-lg
                            border
                            border-gray-200
                            flex
                            items-center
                            justify-center
                            text-gray-600
                            hover:bg-gray-50
                            transition
                        "
                    >
                        <ArrowLeft size={19} />
                    </Link>

                    <div>
                        <h1 className="text-2xl font-bold text-[#123563]">
                            Edit Leadership
                        </h1>

                        <p className="text-sm text-gray-500 mt-1">
                            Perbarui informasi pimpinan perusahaan.
                        </p>
                    </div>
                </div>

                {/* Form */}
                <form
                    onSubmit={submit}
                    className="
                        bg-white
                        border
                        border-gray-200
                        rounded-xl
                        shadow-sm
                        p-6
                    "
                >
                    {/* Nama */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Nama
                        </label>

                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) =>
                                setData("name", e.target.value)
                            }
                            placeholder="Masukkan nama lengkap"
                            className="
                                w-full
                                rounded-lg
                                border
                                border-gray-300
                                px-4
                                py-3
                                text-sm
                                focus:border-[#23478F]
                                focus:ring-2
                                focus:ring-[#23478F]/10
                                outline-none
                            "
                        />

                        {errors.name && (
                            <p className="mt-2 text-sm text-red-500">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Jabatan */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Jabatan
                        </label>

                        <input
                            type="text"
                            value={data.position}
                            onChange={(e) =>
                                setData("position", e.target.value)
                            }
                            placeholder="Contoh: Komisaris Utama"
                            className="
                                w-full
                                rounded-lg
                                border
                                border-gray-300
                                px-4
                                py-3
                                text-sm
                                focus:border-[#23478F]
                                focus:ring-2
                                focus:ring-[#23478F]/10
                                outline-none
                            "
                        />

                        {errors.position && (
                            <p className="mt-2 text-sm text-red-500">
                                {errors.position}
                            </p>
                        )}
                    </div>

                    {/* Foto */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Foto
                        </label>

                        {/* Existing Image */}
                        {leader.image && (
                            <div className="mb-4">
                                <p className="text-xs text-gray-500 mb-2">
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
                                        src={`/storage/${leader.image}`}
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

                        <label
                            className="
                                flex
                                flex-col
                                items-center
                                justify-center
                                w-full
                                min-h-40
                                border-2
                                border-dashed
                                border-gray-300
                                rounded-xl
                                cursor-pointer
                                hover:border-[#23478F]
                                hover:bg-gray-50
                                transition
                            "
                        >
                            <Upload
                                size={28}
                                className="text-gray-400"
                            />

                            <span className="mt-3 text-sm font-medium text-gray-600">
                                Pilih foto baru
                            </span>

                            <span className="mt-1 text-xs text-gray-400">
                                JPG, JPEG, PNG — rasio 4:3
                            </span>

                            <span className="text-xs text-gray-400">
                                Contoh: 1200 × 900 px
                            </span>

                            <input
                                type="file"
                                accept="image/jpeg,image/png,image/jpg"
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
                            <p className="mt-2 text-xs text-green-600">
                                File baru: {data.image.name}
                            </p>
                        )}

                        {errors.image && (
                            <p className="mt-2 text-sm text-red-500">
                                {errors.image}
                            </p>
                        )}

                        <div
                            className="
                                mt-3
                                p-3
                                rounded-lg
                                bg-[#F7F9FF]
                                border
                                border-[#E4EAF5]
                                text-xs
                                text-gray-600
                            "
                        >
                            <strong>Catatan foto:</strong>{" "}
                            Gunakan foto dengan rasio <strong>4:3</strong>{" "}
                            agar tampilan di website tetap proporsional.
                            Disarankan menggunakan ukuran{" "}
                            <strong>1200 × 900 px</strong> atau lebih.
                        </div>
                    </div>

                    {/* Active */}
                    <div className="mb-8">
                        <label className="flex items-center gap-3 cursor-pointer">
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
                                    focus:ring-[#23478F]
                                "
                            />

                            <div>
                                <p className="text-sm font-semibold text-gray-700">
                                    Active
                                </p>

                                <p className="text-xs text-gray-500">
                                    Tampilkan pimpinan ini pada halaman
                                    website.
                                </p>
                            </div>
                        </label>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-5 border-t">

                        <Link
                            href={route("admin.leadership.index")}
                            className="
                                px-5
                                py-2.5
                                rounded-lg
                                border
                                border-gray-300
                                text-sm
                                font-medium
                                text-gray-600
                                hover:bg-gray-50
                                transition
                            "
                        >
                            Batal
                        </Link>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
                                >
                                    Hapus Pemimpin
                                </button>
                            </AlertDialogTrigger>

                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Hapus Pemimpin?
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        Pemimpin yang dihapus tidak dapat dikembalikan.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>

                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Batal
                                    </AlertDialogCancel>

                                    <AlertDialogAction
                                        onClick={deleteLeader}
                                    >
                                        Hapus
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        <button
                            type="submit"
                            disabled={processing}
                            className="
                                px-5
                                py-2.5
                                rounded-lg
                                bg-[#23478F]
                                text-white
                                text-sm
                                font-medium
                                hover:bg-[#18386B]
                                disabled:opacity-50
                                transition
                            "
                        >
                            {processing
                                ? "Menyimpan..."
                                : "Simpan Perubahan"}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}