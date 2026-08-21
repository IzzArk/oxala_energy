import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/react";
import RichTextEditor from "@/Components/RichTextEditor";
import { ArrowLeft } from "lucide-react";


export default function Create() {

    const { data, setData, post } = useForm({
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
                <div className="mb-8">

                    <a
                        href="/admin/news"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-[#23478F]"
                    >
                        <ArrowLeft size={18} />

                        Kembali
                    </a>

                    <h1 className="text-2xl font-bold text-[#23478F] mt-4">
                        Tambah Berita
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Tambahkan Berita Terbaru.
                    </p>

                </div>
                <form
                    onSubmit={submit}
                    className="bg-white p-6 rounded-xl border shadow-sm space-y-5"
                >

                    <div>

                        <label className="block mb-2 font-medium">
                            Judul Berita
                        </label>

                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) =>
                                setData("title", e.target.value)
                            }
                            className="w-full border rounded-lg p-3"
                        />

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">
                            Tanggal Publish
                        </label>

                        <input
                            type="date"
                            value={data.published_at}
                            onChange={(e) =>
                                setData("published_at", e.target.value)
                            }
                            className="w-full border rounded-lg p-3"
                        />

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">
                            Thumbnail
                        </label>

                        <input
                            type="file"
                            onChange={(e) =>
                                setData("thumbnail", e.target.files[0])
                            }
                            className="w-full"
                        />

                    </div>
                    <div>

                        <label className="block mb-2 font-medium">
                            Galeri Berita
                        </label>

                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={(e) =>
                                setData("images", [...e.target.files])
                            }
                            className="w-full"
                        />

                    </div>
                    <div>

                        <label className="block mb-2 font-medium">
                            Isi Berita
                        </label>

                        <div className="border rounded-lg min-h-[300px] p-4">

                            <RichTextEditor
                                value={data.content}
                                onChange={(value) =>
                                    setData("content", value)
                                }
                            />

                        </div>

                    </div>

                    <button
                        type="submit"
                        className="
                            bg-[#23478F]
                            text-white
                            px-6
                            py-3
                            rounded-lg
                            hover:bg-[#1d3c78]
                            transition
                        "
                    >
                        Simpan Berita
                    </button>

                </form>

            </div>

        </AdminLayout>
    );
}