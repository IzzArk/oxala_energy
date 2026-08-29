import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Edit, Plus, Trash2, UserRound } from "lucide-react";

export default function Index({ leaders }) {

    return (
        <AdminLayout>
            <Head title="Leadership" />

            <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-[#123563]">
                            Leadership
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            Kelola data pimpinan perusahaan.
                        </p>
                    </div>

                    <Link
                        href="/admin/leadership/create"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md"
                    >
                        Tambah Pemimpin
                    </Link>
                </div>

                {/* Table */}
                <div
                    className="
                        bg-white
                        rounded-xl
                        border
                        border-gray-200
                        shadow-sm
                        overflow-hidden
                    "
                >
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                                        No Urut
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                                        Foto
                                    </th>

                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                                        Nama
                                    </th>

                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                                        Jabatan
                                    </th>

                                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase">
                                        Status
                                    </th>

                                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-100">
                                {leaders?.length > 0 ? (
                                    leaders.map((leader) => (
                                        <tr
                                            key={leader.id}
                                            className="hover:bg-gray-50 transition"
                                        >
                                            <td className="px-9 py-4">
                                                <p className="font-semibold text-gray-800">
                                                    {leader.sort_order}
                                                </p>
                                            </td>
                                            {/* Foto */}
                                            <td className="px-6 py-4">
                                                <div
                                                    className="
                                                        w-20
                                                        h-[60px]
                                                        rounded-lg
                                                        overflow-hidden
                                                        bg-gray-100
                                                        flex
                                                        items-center
                                                        justify-center
                                                    "
                                                >
                                                    {leader.photo ? (
                                                        <img
                                                            src={`/storage/${leader.photo}`}
                                                            alt={leader.name}
                                                            className="
                                                                w-full
                                                                h-full
                                                                object-cover
                                                            "
                                                        />
                                                    ) : (
                                                        <UserRound
                                                            size={28}
                                                            className="text-gray-400"
                                                        />
                                                    )}
                                                </div>
                                            </td>

                                            {/* Nama */}
                                            <td className="px-6 py-4">
                                                <p className="font-semibold text-gray-800">
                                                    {leader.name}
                                                </p>
                                            </td>

                                            {/* Jabatan */}
                                            <td className="px-6 py-4">
                                                <p className="text-sm text-gray-600">
                                                    {leader.position}
                                                </p>
                                            </td>

                                            {/* Status */}
                                            <td className="px-6 py-4 text-center">
                                                {leader.is_active ? (
                                                    <span
                                                        className="
                                                            inline-flex
                                                            px-3
                                                            py-1
                                                            rounded-full
                                                            bg-green-100
                                                            text-green-700
                                                            text-xs
                                                            font-semibold
                                                        "
                                                    >
                                                        Aktif
                                                    </span>
                                                ) : (
                                                    <span
                                                        className="
                                                            inline-flex
                                                            px-3
                                                            py-1
                                                            rounded-full
                                                            bg-gray-100
                                                            text-gray-500
                                                            text-xs
                                                            font-semibold
                                                        "
                                                    >
                                                        Nonaktif
                                                    </span>
                                                )}
                                            </td>

                                            {/* Action */}
                                            <td className="px-6 py-4">
                                                <div className="flex justify-end">

                                                    <Link
                                                        href={`/admin/leadership/${leader.id}/edit`}
                                                        className="text-blue-600"
                                                    >
                                                        Edit
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="px-6 py-16 text-center"
                                        >
                                            <UserRound
                                                size={40}
                                                className="mx-auto text-gray-300"
                                            />

                                            <p className="mt-3 text-gray-500">
                                                Belum ada data leadership.
                                            </p>

                                            <Link
                                                href={route(
                                                    "admin.leadership.create"
                                                )}
                                                className="
                                                    inline-block
                                                    mt-4
                                                    text-sm
                                                    font-medium
                                                    text-[#23478F]
                                                    hover:underline
                                                "
                                            >
                                                Tambahkan data pertama
                                            </Link>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}