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

export default function Edit({ event }) {

    const { data, setData, put, processing, errors } = useForm({
        title: event.title,
        event_date: event.event_date,
    });

    function submit(e) {
        e.preventDefault();

        put(`/admin/investor-calendar/${event.id}`);
    }

    const deleteEvent = () => {
        router.delete(`/admin/investor-calendar/${event.id}`);
    };

    return (
        <>
            <Head title="Edit Kalender Investor" />
            <AdminLayout>

                <div className="max-w-3xl">

                    <h1 className="text-2xl font-bold mb-6">
                        Edit Kalender Investor
                    </h1>

                    <form
                        onSubmit={submit}
                        className="bg-white border rounded-xl p-6 space-y-6"
                    >

                        <div>

                            <label className="block mb-2 font-medium">
                                Judul Agenda
                            </label>

                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                className="w-full border rounded-lg p-3"
                            />

                            {errors.title && (
                                <p className="text-red-500 text-sm mt-2">
                                    {errors.title}
                                </p>
                            )}

                        </div>

                        <div>

                            <label className="block mb-2 font-medium">
                                Tanggal Agenda
                            </label>

                            <input
                                type="date"
                                value={data.event_date}
                                onChange={(e) =>
                                    setData("event_date", e.target.value)
                                }
                                className="w-full border rounded-lg p-3"
                            />

                            {errors.event_date && (
                                <p className="text-red-500 text-sm mt-2">
                                    {errors.event_date}
                                </p>
                            )}

                        </div>

                        <div className="flex gap-3">

                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <button
                                        type="button"
                                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition mr-10"
                                    >
                                        Hapus Agenda
                                    </button>
                                </AlertDialogTrigger>

                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>
                                            Hapus Agenda?
                                        </AlertDialogTitle>

                                        <AlertDialogDescription>
                                            Agenda yang dihapus tidak dapat dikembalikan.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>

                                    <AlertDialogFooter>
                                        <AlertDialogCancel>
                                            Batal
                                        </AlertDialogCancel>

                                        <AlertDialogAction
                                            onClick={deleteEvent}
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

                </div>

            </AdminLayout>
        </>
    );
}