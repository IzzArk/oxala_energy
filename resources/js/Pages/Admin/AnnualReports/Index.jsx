import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ reports }) {

    return (
        <>
            <Head title="Laporan Tahunan" />
            <AdminLayout>

                <div className="space-y-6">

                    <div className="flex justify-between items-center">

                        <div>

                            <h1 className="text-2xl font-bold">
                                Laporan Tahunan
                            </h1>

                            <p className="text-gray-500 mt-1">
                                Kelola laporan tahunan perusahaan.
                            </p>

                        </div>

                        <Link
                            href="/admin/annual-reports/create"
                            className="bg-[#23478F] text-white px-5 py-2 rounded-lg"
                        >
                            Tambah Laporan
                        </Link>

                    </div>

                    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">

                        <table className="w-full">

                            <thead className="bg-gray-50">

                                <tr>

                                    <th className="px-6 py-4 text-left">
                                        Tahun
                                    </th>

                                    <th className="px-6 py-4 text-left">
                                        Judul
                                    </th>

                                    <th className="px-6 py-4 text-left">
                                        Status
                                    </th>

                                    <th className="px-6 py-4 text-center">
                                        Action
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {reports.map((report) => (

                                    <tr
                                        key={report.id}
                                        className="border-t"
                                    >

                                        <td className="px-6 py-4">
                                            {report.year}
                                        </td>

                                        <td className="px-6 py-4">
                                            {report.title}
                                        </td>

                                        <td className="px-6 py-4">

                                            {report.is_active ? (
                                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                                                    Aktif
                                                </span>
                                            ) : (
                                                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">
                                                    Nonaktif
                                                </span>
                                            )}

                                        </td>

                                        <td className="px-6 py-4">

                                            <div className="flex justify-center gap-3">

                                                <Link
                                                    href={`/admin/annual-reports/${report.id}/edit`}
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

                </div>

            </AdminLayout>
        </>
    );
}