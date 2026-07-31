import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";


export default function Index({ banners }) {
    return (
        <>
            <Head title="Banner" />
            <AdminLayout>

                <div className="space-y-6">

                    <div className="flex justify-between items-center">

                        <div>
                            <h1 className="text-2xl font-bold">
                                Banner Management
                            </h1>

                            <p className="text-gray-500">
                                Kelola banner website
                            </p>
                        </div>

                        <Link
                            href="/admin/banner/create"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md"
                        >
                            Tambah Banner
                        </Link>

                    </div>

                    <div className="bg-white rounded-xl border shadow-sm">
                        <table className="w-full">

                            <thead>
                                <tr className="bg-gray-50 border-b">
                                    <th className="p-3 text-left">Image</th>
                                    <th className="p-3 text-left">Title</th>
                                    <th className="p-3 text-left">Subtitle</th>
                                    <th className="p-3 text-left">Status</th>
                                    <th className="p-3 text-left">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {banners.map((banner) => (
                                    <tr
                                        key={banner.id}
                                        className="border-b"
                                    >
                                        <td className="p-3">
                                            <img
                                                src={`/storage/${banner.image}`}
                                                alt={banner.title}
                                                className="w-24 h-16 object-cover rounded"
                                            />
                                        </td>

                                        <td className="p-3">
                                            {banner.title}
                                        </td>

                                        <td className="p-3">
                                            {banner.subtitle}
                                        </td>

                                        <td className="p-3">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs ${banner.is_active
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                                    }`}
                                            >
                                                {banner.is_active
                                                    ? "Aktif"
                                                    : "Nonaktif"}
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <Link
                                                href={`/admin/banner/${banner.id}/edit`}
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