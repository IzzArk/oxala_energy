import AdminLayout from "@/Layouts/AdminLayout";
import RichTextEditor from "@/Components/RichTextEditor";

import {
    useForm,
    router,
} from "@inertiajs/react";

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
} from "@/components/ui/alert-dialog";

export default function Edit({ news }) {

    const {
        data,
        setData,
        post,
        processing,
        errors,
    } = useForm({
        _method: "PUT",
        title: news.title || "",
        content: news.content || "",
        published_at: news.published_at || "",
        thumbnail: null,
    });

    const submit = (e) => {
        e.preventDefault();

        post(`/admin/news/${news.id}`);
    };

    const deleteNews = () => {
        router.delete(`/admin/news/${news.id}`);
    };

    return (
        <AdminLayout>

            <div className="max-w-5xl">

                {/* Header */}

                <div className="mb-8">

                    <a
                        href="/admin/news"
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
                        Edit Berita
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Perbarui informasi berita yang ditampilkan pada halaman website.
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
                            Judul Berita
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
                            placeholder="Contoh: Perusahaan Raih Penghargaan..."
                        />

                        {errors.title && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.title}
                            </p>
                        )}

                    </div>


                    {/* Tanggal Publish */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tanggal Publish
                        </label>

                        <input
                            type="date"
                            value={data.published_at}
                            onChange={(e) =>
                                setData(
                                    "published_at",
                                    e.target.value
                                )
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

                        {errors.published_at && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.published_at}
                            </p>
                        )}

                    </div>


                    {/* Thumbnail Saat Ini */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Thumbnail Saat Ini
                        </label>

                        {news.thumbnail ? (

                            <div className="w-full overflow-hidden rounded-xl border border-gray-200">

                                <img
                                    src={`/storage/${news.thumbnail}`}
                                    alt={news.title}
                                    className="
                                        w-full
                                        h-64
                                        object-cover
                                    "
                                />

                            </div>

                        ) : (

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    w-full
                                    h-48
                                    bg-gray-50
                                    border
                                    border-gray-200
                                    rounded-xl
                                    text-sm
                                    text-gray-400
                                "
                            >
                                Belum ada thumbnail
                            </div>

                        )}

                    </div>


                    {/* Ganti Thumbnail */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Ganti Thumbnail
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
                                Klik untuk mengganti thumbnail
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
                                        "thumbnail",
                                        e.target.files[0]
                                    )
                                }
                            />

                        </label>

                        {data.thumbnail && (
                            <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">

                                <ImagePlus size={16} />

                                <span>
                                    File baru:{" "}
                                    <span className="font-medium">
                                        {data.thumbnail.name}
                                    </span>
                                </span>

                            </div>
                        )}

                        {errors.thumbnail && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.thumbnail}
                            </p>
                        )}

                    </div>


                    {/* Konten Berita */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Konten Berita
                        </label>

                        <div
                            className="
                                border
                                border-gray-200
                                rounded-xl
                                overflow-hidden
                                focus-within:ring-2
                                focus-within:ring-[#B6C95C]
                                focus-within:border-[#B6C95C]
                                transition
                            "
                        >

                            <div className="min-h-[350px] p-4">

                                <RichTextEditor
                                    value={data.content}
                                    onChange={(value) =>
                                        setData(
                                            "content",
                                            value
                                        )
                                    }
                                />

                            </div>

                        </div>

                        {errors.content && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.content}
                            </p>
                        )}

                    </div>


                    {/* Actions */}

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

                                    Hapus Berita
                                </button>

                            </AlertDialogTrigger>


                            <AlertDialogContent>

                                <AlertDialogHeader>

                                    <AlertDialogTitle>
                                        Hapus Berita?
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        Berita yang dihapus tidak dapat
                                        dikembalikan. Apakah Anda yakin ingin
                                        menghapus berita ini?
                                    </AlertDialogDescription>

                                </AlertDialogHeader>


                                <AlertDialogFooter>

                                    <AlertDialogCancel>
                                        Batal
                                    </AlertDialogCancel>

                                    <AlertDialogAction
                                        onClick={deleteNews}
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
                                : "Update Berita"}
                        </button>

                    </div>

                </form>

            </div>

        </AdminLayout>
    );
}