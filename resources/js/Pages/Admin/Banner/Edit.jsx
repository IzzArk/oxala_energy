import { useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { router } from "@inertiajs/react";

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

export default function Edit({ banner }) {

    const { data, setData, post, processing } = useForm({
        _method: "PUT",
        title: banner.title || "",
        subtitle: banner.subtitle || "",
        description: banner.description || "",
        button_text: banner.button_text || "",
        button_link: banner.button_link || "",
        is_active: banner.is_active,
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


                <h1 className="text-2xl font-bold mb-6">
                    Edit Banner
                </h1>

                <form
                    onSubmit={submit}
                    className="space-y-4 bg-white p-6 rounded-xl shadow-sm border"
                >

                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) =>
                            setData("title", e.target.value)
                        }
                        className="w-full border rounded p-2"
                    />

                    <input
                        type="text"
                        value={data.subtitle}
                        onChange={(e) =>
                            setData("subtitle", e.target.value)
                        }
                        className="w-full border rounded p-2"
                    />

                    <textarea
                        value={data.description}
                        onChange={(e) =>
                            setData("description", e.target.value)
                        }
                        className="w-full border rounded p-2"
                    />

                    <div>
                        <img
                            src={`/storage/${banner.image}`}
                            alt={banner.title}
                            className="w-60 rounded-lg mb-3"
                        />
                    </div>

                    <input
                        type="file"
                        onChange={(e) =>
                            setData("image", e.target.files[0])
                        }
                    />
                    <div>

                        <label className="flex gap-3 items-center">

                            <input
                                type="checkbox"
                                checked={data.is_active}
                                onChange={(e) =>
                                    setData(
                                        "is_active",
                                        e.target.checked
                                    )
                                }
                            />

                            Aktif

                        </label>

                    </div>

                    <div className=" mt-6">

                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition mr-10"
                                >
                                    Hapus Banner
                                </button>
                            </AlertDialogTrigger>

                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Hapus Banner?
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        Banner yang dihapus tidak dapat dikembalikan.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>

                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Batal
                                    </AlertDialogCancel>

                                    <AlertDialogAction
                                        onClick={deleteBanner}
                                    >
                                        Hapus
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                        <button
                            type="submit"
                            disabled={processing}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {processing ? "Menyimpan..." : "Update Banner"}
                        </button>

                    </div>

                </form>

            </div>

        </AdminLayout>
    );
}