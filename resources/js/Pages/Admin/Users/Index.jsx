import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function Index({ users }) {


    return (
        <>
            <Head title="Users" />

            <AdminLayout>

                {/* Header */}
                <div className="flex justify-between items-center mb-6">

                    <div>
                        <h1 className="text-2xl font-bold">
                            Users
                        </h1>

                        <p className="text-slate-500">
                            Kelola pengguna yang dapat mengakses CMS
                        </p>
                    </div>

                    <Link
                        href="/admin/users/create"
                        className="
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            px-4
                            py-2
                            rounded-lg
                            flex
                            items-center
                            gap-2
                            transition
                        "
                    >

                        Tambah User
                    </Link>

                </div>

                {/* Table */}
                <div className="bg-white rounded-xl border overflow-hidden">

                    <table className="w-full">

                        <thead className="bg-slate-50">

                            <tr>

                                <th className="text-left p-4">
                                    Nama
                                </th>

                                <th className="text-left p-4">
                                    Email
                                </th>

                                <th className="text-left p-4">
                                    Tanggal Dibuat
                                </th>

                                <th className="text-center p-4 w-40">
                                    Aksi
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {users.length > 0 ? (

                                users.map((user) => (

                                    <tr
                                        key={user.id}
                                        className="border-t hover:bg-slate-50 transition"
                                    >

                                        {/* Name */}
                                        <td className="p-4">

                                            <div className="font-medium text-slate-800">
                                                {user.name}
                                            </div>

                                        </td>

                                        {/* Email */}
                                        <td className="p-4 text-slate-600">
                                            {user.email}
                                        </td>

                                        {/* Created At */}
                                        <td className="p-4 text-slate-600">

                                            {user.created_at
                                                ? new Date(
                                                    user.created_at
                                                ).toLocaleDateString("id-ID")
                                                : "-"
                                            }

                                        </td>

                                        {/* Actions */}
                                        <td className="p-4">

                                            <div className="flex justify-center gap-3">

                                                <Link
                                                    href={`/admin/users/${user.id}/edit`}
                                                    className="
                                                        text-blue-600
                                                        hover:text-blue-800
                                                        flex
                                                        items-center
                                                        gap-1
                                                    "
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
                                        colSpan="4"
                                        className="
                                            p-8
                                            text-center
                                            text-slate-500
                                        "
                                    >
                                        Belum ada user.

                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </AdminLayout>
        </>
    );
}