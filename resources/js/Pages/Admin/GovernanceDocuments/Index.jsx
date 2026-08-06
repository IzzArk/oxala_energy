import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ documents }) {


    return (
        <>
            <Head title="Dokumen Keterbukaan Informasi" />
            <AdminLayout>


                <div className="space-y-6">

                    <div className="flex items-center justify-between">

                        <div>
                            <h1 className="text-2xl font-bold">
                                Dokumen Keterbukaan Informasi
                            </h1>

                            <p className="text-gray-500 mt-1">
                                Kelola Dokumen perusahaan.
                            </p>
                        </div>
                        <Link
                            href="/admin/governance-documents/create"
                            className="bg-[#23478F] text-white px-4 py-2 rounded-lg"
                        >
                            Tambah Dokumen
                        </Link>

                    </div>

                    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

                        <table className="w-full">

                            <thead className="bg-gray-100">

                                <tr>

                                    <th className="p-4 text-left">Judul</th>

                                    <th className="p-4 text-left">
                                        Status
                                    </th>

                                    <th className="p-4 text-left">
                                        Dibuat
                                    </th>

                                    <th className="p-4 text-center">
                                        Aksi
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {documents.map((doc) => (

                                    <tr
                                        key={doc.id}
                                        className="border-t"
                                    >

                                        <td className="p-4">
                                            {doc.title}
                                        </td>

                                        <td className="p-4">

                                            <span
                                                className={`px-3 py-1 rounded-full text-xs ${doc.is_active
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                                    }`}
                                            >
                                                {doc.is_active
                                                    ? "Aktif"
                                                    : "Nonaktif"}
                                            </span>

                                        </td>

                                        <td className="p-4">
                                            {new Date(
                                                doc.created_at
                                            ).toLocaleDateString("id-ID")}
                                        </td>

                                        <td className="p-4">

                                            <div className="flex justify-center gap-2">


                                                <Link
                                                    href={`/admin/governance-documents/${doc.id}/edit`}
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