import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";

export default function Index({ contacts }) {

    return (
        <>
            <Head title="Contacts" />
            <AdminLayout>

                <div className="space-y-6">

                    <div>

                        <h1 className="text-2xl font-bold text-gray-900">
                            Pesan Masuk
                        </h1>

                        <p className="text-gray-500 mt-1">
                            Kelola pesan yang dikirim melalui formulir kontak website.
                        </p>

                    </div>

                    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">

                        <div className="overflow-x-auto">

                            <table className="w-full">

                                <thead className="bg-gray-50 border-b">

                                    <tr>

                                        <th className="px-6 py-4 text-left">
                                            Nama
                                        </th>

                                        <th className="px-6 py-4 text-left">
                                            Email
                                        </th>

                                        <th className="px-6 py-4 text-left">
                                            Subjek
                                        </th>

                                        <th className="px-6 py-4 text-left">
                                            Status
                                        </th>

                                        <th className="px-6 py-4 text-left">
                                            Tanggal
                                        </th>

                                        <th className="px-6 py-4 text-center">
                                            Action
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {contacts.length > 0 ? (

                                        contacts.map((contact) => (

                                            <tr
                                                key={contact.id}
                                                className="border-b hover:bg-gray-50"
                                            >

                                                <td className="px-6 py-4">
                                                    {contact.name}
                                                </td>

                                                <td className="px-6 py-4">
                                                    {contact.email}
                                                </td>

                                                <td className="px-6 py-4">
                                                    {contact.subject}
                                                </td>

                                                <td className="px-6 py-4">

                                                    {contact.is_read ? (

                                                        <span
                                                            className="
                                                            px-3
                                                            py-1
                                                            rounded-full
                                                            text-xs
                                                            font-medium
                                                            bg-green-100
                                                            text-green-700
                                                        "
                                                        >
                                                            Sudah Dibaca
                                                        </span>

                                                    ) : (

                                                        <span
                                                            className="
                                                            px-3
                                                            py-1
                                                            rounded-full
                                                            text-xs
                                                            font-medium
                                                            bg-yellow-100
                                                            text-yellow-700
                                                        "
                                                        >
                                                            Belum Dibaca
                                                        </span>

                                                    )}

                                                </td>

                                                <td className="px-6 py-4 text-sm text-gray-500">

                                                    {new Date(
                                                        contact.created_at
                                                    ).toLocaleDateString(
                                                        "id-ID",
                                                        {
                                                            day: "2-digit",
                                                            month: "long",
                                                            year: "numeric",
                                                        }
                                                    )}

                                                </td>

                                                <td className="px-6 py-4 text-center">

                                                    <Link
                                                        href={`/admin/contacts/${contact.id}`}
                                                        className="
                                                        inline-flex
                                                        items-center
                                                        px-4
                                                        py-2
                                                        rounded-lg
                                                        bg-[#23478F]
                                                        text-white
                                                        text-sm
                                                        hover:bg-[#1b3970]
                                                    "
                                                    >
                                                        Lihat
                                                    </Link>

                                                </td>

                                            </tr>

                                        ))

                                    ) : (

                                        <tr>

                                            <td
                                                colSpan="6"
                                                className="
                                                py-12
                                                text-center
                                                text-gray-500
                                            "
                                            >
                                                Belum ada pesan masuk.
                                            </td>

                                        </tr>

                                    )}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </AdminLayout>
        </>
    );
}