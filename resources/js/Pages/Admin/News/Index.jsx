import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";

export default function Index({ news }) {
    return (
        <>
            <Head title="Berita" />
            <AdminLayout>

                <div className="space-y-6">

                    <div className="flex justify-between items-center">

                        <div>
                            <h1 className="text-2xl font-bold">
                                Berita Management
                            </h1>

                            <p className="text-gray-500">
                                Kelola berita website
                            </p>
                        </div>

                        <Link
                            href="/admin/news/create"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md"
                        >
                            Tambah Berita
                        </Link>

                    </div>

                    <div className="bg-white rounded-xl border shadow-sm">

                        <table className="w-full">

                            <thead>
                                <tr className="bg-gray-50 border-b">

                                    <th className="p-4 text-left">
                                        Judul
                                    </th>

                                    <th className="p-4 text-left">
                                        Penulis
                                    </th>

                                    <th className="p-4 text-left">
                                        Tanggal
                                    </th>

                                    <th className="p-4 text-left">
                                        Action
                                    </th>

                                </tr>
                            </thead>

                            <tbody>

                                {news.map(item => (

                                    <tr
                                        key={item.id}
                                        className="border-b"
                                    >

                                        <td className="p-4">
                                            {item.title}
                                        </td>

                                        <td className="p-4">
                                            {item.author}
                                        </td>

                                        <td className="p-4">
                                            {item.formatted_date}
                                        </td>

                                        <td className="p-4">

                                            <Link
                                                href={`/admin/news/${item.id}/edit`}
                                                className="text-blue-600"
                                            >
                                                Edit
                                            </Link>

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