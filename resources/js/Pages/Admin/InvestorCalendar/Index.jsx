import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function Index({ events }) {

    function destroy(id) {
        if (confirm("Yakin ingin menghapus data?")) {
            router.delete(`/admin/investor-calendar/${id}`);
        }
    }

    return (
        <>
            <Head title="Kalender Investor" />
            <AdminLayout>

                <div className="flex justify-between items-center mb-6">

                    <div>
                        <h1 className="text-2xl font-bold">
                            Kalender Investor
                        </h1>

                        <p className="text-slate-500">
                            Kelola agenda investor perusahaan
                        </p>
                    </div>

                    <Link
                        href="/admin/investor-calendar/create"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                        Tambah Agenda
                    </Link>

                </div>

                <div className="bg-white rounded-xl border overflow-hidden">

                    <table className="w-full">

                        <thead className="bg-slate-50">

                            <tr>

                                <th className="text-left p-4">Judul</th>
                                <th className="text-left p-4">Tanggal</th>
                                <th className="text-center p-4 w-40">
                                    Aksi
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {events.map((event) => (

                                <tr
                                    key={event.id}
                                    className="border-t"
                                >

                                    <td className="p-4">
                                        {event.title}
                                    </td>

                                    <td className="p-4">
                                        {new Date(
                                            event.event_date
                                        ).toLocaleDateString("id-ID")}
                                    </td>

                                    <td className="p-4">

                                        <div className="flex justify-center gap-2">

                                            <Link
                                                href={`/admin/investor-calendar/${event.id}/edit`}
                                                className="text-blue-600"
                                            >
                                                Edit
                                            </Link>


                                        </div>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </AdminLayout>
        </>
    );
}