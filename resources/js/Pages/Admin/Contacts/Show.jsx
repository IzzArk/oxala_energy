import AdminLayout from "@/Layouts/AdminLayout";
import { Link, router } from "@inertiajs/react";
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

export default function Show({ contact }) {

    const deleteContact = () => {
        router.delete(`/admin/contacts/${contact.id}`);
    };

    return (
        <AdminLayout>

            <div className="max-w-4xl">

                <div className="flex items-center justify-between mb-6">

                    <div>

                        <h1 className="text-2xl font-bold">
                            Detail Pesan
                        </h1>

                        <p className="text-gray-500 mt-1">
                            Informasi pesan yang dikirim melalui website.
                        </p>

                    </div>

                    <Link
                        href="/admin/contacts"
                        className="
                            px-4
                            py-2
                            border
                            rounded-lg
                            hover:bg-gray-50
                        "
                    >
                        Kembali
                    </Link>

                </div>

                <div
                    className="
                        bg-white
                        border
                        rounded-xl
                        shadow-sm
                        p-8
                    "
                >

                    <div className="grid md:grid-cols-2 gap-6">

                        <div>

                            <label className="text-sm text-gray-500">
                                Nama
                            </label>

                            <div className="mt-1 font-medium">
                                {contact.name}
                            </div>

                        </div>

                        <div>

                            <label className="text-sm text-gray-500">
                                Email
                            </label>

                            <div className="mt-1 font-medium">
                                {contact.email}
                            </div>

                        </div>

                    </div>

                    <div className="mt-6">

                        <label className="text-sm text-gray-500">
                            Subjek
                        </label>

                        <div className="mt-1 font-medium">
                            {contact.subject}
                        </div>

                    </div>

                    <div className="mt-6">

                        <label className="text-sm text-gray-500">
                            Tanggal
                        </label>

                        <div className="mt-1">
                            {new Date(
                                contact.created_at
                            ).toLocaleString("id-ID", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </div>

                    </div>

                    <div className="mt-6">

                        <label className="text-sm text-gray-500">
                            Pesan
                        </label>

                        <div
                            className="
                                mt-2
                                border
                                rounded-lg
                                p-5
                                bg-gray-50
                                whitespace-pre-wrap
                                leading-relaxed
                            "
                        >
                            {contact.message}
                        </div>

                    </div>

                    <div className="mt-8 flex gap-3">

                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition mr-10"
                                >
                                    Hapus Pesan
                                </button>
                            </AlertDialogTrigger>

                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Hapus Pesan?
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        Pesan yang dihapus tidak dapat dikembalikan.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>

                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Batal
                                    </AlertDialogCancel>

                                    <AlertDialogAction
                                        onClick={deleteContact}
                                    >
                                        Hapus
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                    </div>

                </div>

            </div>

        </AdminLayout>
    );
}