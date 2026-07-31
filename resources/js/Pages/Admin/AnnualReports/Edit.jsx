import AdminLayout from "@/Layouts/AdminLayout";
import { useForm, router } from "@inertiajs/react";
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

export default function Edit({ report }) {

    const {
        data,
        setData,
        post,
        processing
    } = useForm({

        title: report.title,
        year: report.year,
        file: null,
        is_active: report.is_active,

        _method: "put"

    });

    const submit = (e) => {
        e.preventDefault();

        post(`/admin/annual-reports/${report.id}`);
    };

    const deleteReport = () => {
        router.delete(`/admin/annual-reports/${report.id}`);
    };

    return (

        <AdminLayout>

            <div className="max-w-3xl">

                <h1 className="text-2xl font-bold mb-6">
                    Edit Annual Report
                </h1>

                <form
                    onSubmit={submit}
                    className="bg-white border rounded-xl p-8 shadow-sm space-y-5"
                >

                    <div>

                        <label className="block mb-2 font-medium">
                            Judul
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
                            Tahun
                        </label>

                        <input
                            type="number"
                            value={data.year}
                            onChange={(e) =>
                                setData("year", e.target.value)
                            }
                            className="w-full border rounded-lg p-3"
                        />

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">
                            Ganti PDF
                        </label>

                        <input
                            type="file"
                            accept=".pdf"
                            onChange={(e) =>
                                setData("file", e.target.files[0])
                            }
                        />

                        <p className="text-sm text-gray-500 mt-2">
                            Kosongkan jika tidak ingin mengganti file.
                        </p>

                    </div>

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

                    <div className="flex justify-between pt-4">

                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition mr-10"
                                >
                                    Hapus Laporan
                                </button>
                            </AlertDialogTrigger>

                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Hapus Laporan?
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        Laporan yang dihapus tidak dapat dikembalikan.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>

                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Batal
                                    </AlertDialogCancel>

                                    <AlertDialogAction
                                        onClick={deleteReport}
                                    >
                                        Hapus
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#23478F] text-white px-6 py-3 rounded-lg"
                        >
                            Update
                        </button>

                    </div>

                </form>

            </div>

        </AdminLayout>

    );
}