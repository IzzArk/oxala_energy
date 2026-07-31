import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, router } from "@inertiajs/react";
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

export default function Edit({ document }) {

    const { data, setData, processing, errors } =
        useForm({
            title: document.title,
            description: document.description ?? "",
            file: null,
            sort_order: document.sort_order,
            is_active: document.is_active,
        });

    function submit(e) {
        e.preventDefault();

        router.post(
            route(
                "admin.governance-documents.update",
                document.id
            ),
            {
                ...data,
                _method: "put",
            }
        );
    }

    const deleteDocument = () => {
        router.delete(`/admin/governance-documents/${document.id}`);
    };

    return (
        <AdminLayout>

            <Head title="Edit Governance Document" />

            <h1 className="text-2xl font-bold mb-6">
                Edit Governance Document
            </h1>

            <form
                onSubmit={submit}
                className="bg-white border rounded-xl p-6 space-y-5"
            >

                <div>

                    <label>Judul</label>

                    <input
                        value={data.title}
                        onChange={(e) =>
                            setData("title", e.target.value)
                        }
                        className="w-full border rounded-lg p-3 mt-2"
                    />

                    <p className="text-red-500 text-sm">
                        {errors.title}
                    </p>

                </div>

                <div>

                    <label>Deskripsi</label>

                    <textarea
                        rows="4"
                        value={data.description}
                        onChange={(e) =>
                            setData(
                                "description",
                                e.target.value
                            )
                        }
                        className="w-full border rounded-lg p-3 mt-2"
                    />

                </div>

                <div>

                    <label>Ganti PDF</label>

                    <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) =>
                            setData(
                                "file",
                                e.target.files[0]
                            )
                        }
                        className="mt-2"
                    />

                </div>

                <div>

                    <label>Urutan</label>

                    <input
                        type="number"
                        value={data.sort_order}
                        onChange={(e) =>
                            setData(
                                "sort_order",
                                e.target.value
                            )
                        }
                        className="w-full border rounded-lg p-3 mt-2"
                    />

                </div>

                <label className="flex items-center gap-2">

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

                <div className="flex gap-3">

                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <button
                                type="button"
                                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition mr-10"
                            >
                                Hapus Dokumen
                            </button>
                        </AlertDialogTrigger>

                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>
                                    Hapus Dokumen?
                                </AlertDialogTitle>

                                <AlertDialogDescription>
                                    Documen yang dihapus tidak dapat dikembalikan.
                                </AlertDialogDescription>
                            </AlertDialogHeader>

                            <AlertDialogFooter>
                                <AlertDialogCancel>
                                    Batal
                                </AlertDialogCancel>

                                <AlertDialogAction
                                    onClick={deleteDocument}
                                >
                                    Hapus
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>

                    <button
                        disabled={processing}
                        className="bg-[#23478F] text-white px-6 py-3 rounded-lg"
                    >
                        Update
                    </button>

                </div>

            </form>

        </AdminLayout>
    );
}