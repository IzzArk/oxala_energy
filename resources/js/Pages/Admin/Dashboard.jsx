import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

import {
    Newspaper,
    Phone,
    FileText,
    FolderOpen,
} from "lucide-react";

export default function Dashboard({ stats }) {

    const cards = [
        {
            title: "Berita",
            value: stats.news,
            icon: Newspaper,
            color: "bg-blue-500",
        },
        {
            title: "Pesan Masuk",
            value: stats.contacts,
            icon: Phone,
            color: "bg-green-500",
        },
        {
            title: "Laporan Tahunan",
            value: stats.annualReports,
            icon: FileText,
            color: "bg-orange-500",
        },
        {
            title: "Dokumen Tata Kelola",
            value: stats.governanceDocuments,
            icon: FolderOpen,
            color: "bg-purple-500",
        },
    ];

    return (
        <>
            <Head title="Dashboard" />

            <AdminLayout>

                <h1 className="text-3xl font-bold">
                    Dashboard
                </h1>

                <p className="text-slate-500 mt-2 mb-8">
                    Selamat datang di OXALA CMS
                </p>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                    {cards.map((card) => {

                        const Icon = card.icon;

                        return (

                            <div
                                key={card.title}
                                className="
                                    bg-white
                                    rounded-xl
                                    border
                                    shadow-sm
                                    p-6
                                    flex
                                    items-center
                                    justify-between
                                "
                            >

                                <div>

                                    <p className="text-gray-500 text-sm">
                                        {card.title}
                                    </p>

                                    <h2 className="text-4xl font-bold mt-2">
                                        {card.value}
                                    </h2>

                                </div>

                                <div
                                    className={`
                                        ${card.color}
                                        w-14
                                        h-14
                                        rounded-xl
                                        flex
                                        items-center
                                        justify-center
                                        text-white
                                    `}
                                >

                                    <Icon size={28} />

                                </div>

                            </div>

                        );

                    })}

                </div>

            </AdminLayout>
        </>
    );
}