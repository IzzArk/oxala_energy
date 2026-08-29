import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/react";
import RichTextEditor from "@/Components/RichTextEditor";
import { ArrowLeft, Upload, ImagePlus } from "lucide-react";

export default function Create() {
    const {
        data,
        setData,
        post,
        processing,
        errors,
    } = useForm({
        title: "",
        published_at: "",
        content: "",
        thumbnail: null,
        images: [],
    });

    const submit = (e) => {
        e.preventDefault();

        post("/admin/news");
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
                        Tambah Berita
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Tambahkan berita terbaru untuk ditampilkan pada halaman website.
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
                                setData("published_at", e.target.value)
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


                    {/* Thumbnail */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Thumbnail Berita
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
                                Klik untuk upload thumbnail
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
                                    {data.thumbnail.name}
                                </span>
                            </div>
                        )}

                        {errors.thumbnail && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.thumbnail}
                            </p>
                        )}

                    </div>


                    {/* Galeri */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Galeri Berita
                        </label>

                        <label
                            className="
                                flex
                                flex-col
                                items-center
                                justify-center
                                w-full
                                h-48
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

                            <ImagePlus
                                size={32}
                                className="text-gray-400 mb-3"
                            />

                            <span className="text-sm text-gray-600">
                                Klik untuk upload foto galeri
                            </span>

                            <span className="text-xs text-gray-400 mt-1">
                                Bisa memilih beberapa gambar sekaligus
                            </span>

                            <span className="text-xs text-[#7A9433] font-medium mt-1">
                                JPG, PNG, WEBP
                            </span>

                            <input
                                type="file"
                                multiple
                                accept="image/jpeg,image/png,image/webp"
                                className="hidden"
                                onChange={(e) =>
                                    setData(
                                        "images",
                                        [...e.target.files]
                                    )
                                }
                            />

                        </label>

                        {data.images.length > 0 && (
                            <div className="mt-3">

                                <p className="text-sm text-gray-500 mb-2">
                                    {data.images.length} foto dipilih
                                </p>

                                <div className="flex flex-wrap gap-2">

                                    {data.images.map((image, index) => (
                                        <div
                                            key={index}
                                            className="
                                                px-3
                                                py-2
                                                bg-gray-50
                                                border
                                                border-gray-200
                                                rounded-lg
                                                text-xs
                                                text-gray-600
                                            "
                                        >
                                            {image.name}
                                        </div>
                                    ))}

                                </div>

                            </div>
                        )}

                        {errors.images && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.images}
                            </p>
                        )}

                    </div>


                    {/* Isi Berita */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Isi Berita
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
                                        setData("content", value)
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
                                : "Simpan Berita"}
                        </button>

                    </div>

                </form>

            </div>

        </AdminLayout>
    );
}