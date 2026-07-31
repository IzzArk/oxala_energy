import AdminLayout from "@/Layouts/AdminLayout";
import RichTextEditor from "@/Components/RichTextEditor";

import {
    useForm,
    router,
} from "@inertiajs/react";
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

            <div className="max-w-6xl">

                <div className="mb-6">

                    <h1 className="text-2xl font-bold">
                        Edit Berita
                    </h1>

                    <p className="text-gray-500">
                        Perbarui informasi berita
                    </p>

                </div>

                <form
                    onSubmit={submit}
                    className="bg-white border rounded-xl shadow-sm p-6 space-y-6"
                >

                    <div>

                        <label className="block mb-2 font-medium">
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
                            className="w-full border rounded-md p-3"
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
                            Thumbnail Saat Ini
                        </label>

                        {news.thumbnail && (

                            <img
                                src={`/storage/${news.thumbnail}`}
                                alt={news.title}
                                className="w-64 rounded-lg border mb-4"
                            />

                        )}

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">
                            Ganti Thumbnail
                        </label>

                        <input
                            type="file"
                            onChange={(e) =>
                                setData(
                                    "thumbnail",
                                    e.target.files[0]
                                )
                            }
                            className="w-full border rounded-md p-2"
                        />

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">
                            Konten Berita
                        </label>

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

                    <div className="flex justify-between pt-4">

                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition mr-10"
                                >
                                    Hapus Berita
                                </button>
                            </AlertDialogTrigger>

                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Hapus Berita?
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        Berita yang dihapus tidak dapat dikembalikan.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>

                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Batal
                                    </AlertDialogCancel>

                                    <AlertDialogAction
                                        onClick={deleteNews}
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
                                bg-blue-600
                                hover:bg-blue-700
                                text-white
                                px-4
                                py-2
                                rounded-md
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