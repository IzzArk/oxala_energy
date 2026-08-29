import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";
import {
    ArrowLeft,
    Mail,
    User,
    MessageSquare,
    CalendarDays,
    Trash2,
} from "lucide-react";

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


    const formattedDate = new Date(
        contact.created_at
    ).toLocaleString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });


    return (

        <AdminLayout>

            <Head title="Detail Pesan" />

            <div className="max-w-4xl">

                {/* Header */}

                <div className="mb-8">

                    <Link
                        href="/admin/contacts/general"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            text-gray-500
                            hover:text-[#23478F]
                            transition
                        "
                    >
                        <ArrowLeft size={18} />

                        Kembali
                    </Link>


                    <h1 className="text-2xl font-bold text-[#23478F] mt-4">
                        Detail Pesan
                    </h1>


                    <p className="text-gray-500 mt-1">
                        Informasi pesan yang dikirim melalui website.
                    </p>

                </div>


                {/* Main Card */}

                <div
                    className="
                        bg-white
                        rounded-2xl
                        border
                        border-gray-100
                        shadow-sm
                        overflow-hidden
                    "
                >

                    {/* Accent */}

                    <div className="h-1 bg-[#B6C95C]" />


                    <div className="p-8">

                        {/* Sender Information */}

                        <div className="mb-8">

                            <h2 className="text-base font-semibold text-gray-800 mb-5">
                                Informasi Pengirim
                            </h2>


                            <div className="grid md:grid-cols-2 gap-5">

                                {/* Name */}

                                <div
                                    className="
                                        flex
                                        items-start
                                        gap-4
                                        p-4
                                        rounded-xl
                                        bg-gray-50
                                        border
                                        border-gray-100
                                    "
                                >

                                    <div
                                        className="
                                            w-10
                                            h-10
                                            rounded-lg
                                            bg-[#EEF2FA]
                                            flex
                                            items-center
                                            justify-center
                                            shrink-0
                                        "
                                    >

                                        <User
                                            size={19}
                                            className="text-[#23478F]"
                                        />

                                    </div>


                                    <div className="min-w-0">

                                        <p className="text-xs text-gray-500 mb-1">
                                            Nama
                                        </p>

                                        <p className="text-sm font-semibold text-gray-800 break-words">
                                            {contact.name}
                                        </p>

                                    </div>

                                </div>


                                {/* Email */}

                                <div
                                    className="
                                        flex
                                        items-start
                                        gap-4
                                        p-4
                                        rounded-xl
                                        bg-gray-50
                                        border
                                        border-gray-100
                                    "
                                >

                                    <div
                                        className="
                                            w-10
                                            h-10
                                            rounded-lg
                                            bg-[#EEF2FA]
                                            flex
                                            items-center
                                            justify-center
                                            shrink-0
                                        "
                                    >

                                        <Mail
                                            size={19}
                                            className="text-[#23478F]"
                                        />

                                    </div>


                                    <div className="min-w-0">

                                        <p className="text-xs text-gray-500 mb-1">
                                            Email
                                        </p>

                                        <p className="text-sm font-semibold text-gray-800 break-words">
                                            {contact.email}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Subject */}

                        <div
                            className="
                                border-t
                                border-gray-100
                                pt-6
                            "
                        >

                            <div className="flex items-start gap-4">

                                <div
                                    className="
                                        w-10
                                        h-10
                                        rounded-lg
                                        bg-[#EEF2FA]
                                        flex
                                        items-center
                                        justify-center
                                        shrink-0
                                    "
                                >

                                    <MessageSquare
                                        size={19}
                                        className="text-[#23478F]"
                                    />

                                </div>


                                <div className="min-w-0">

                                    <p className="text-xs text-gray-500 mb-1">
                                        Subjek
                                    </p>

                                    <p className="text-base font-semibold text-gray-800 break-words">
                                        {contact.subject}
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* Date */}

                        <div
                            className="
                                mt-6
                                flex
                                items-start
                                gap-4
                            "
                        >

                            <div
                                className="
                                    w-10
                                    h-10
                                    rounded-lg
                                    bg-[#FAFCF3]
                                    flex
                                    items-center
                                    justify-center
                                    shrink-0
                                "
                            >

                                <CalendarDays
                                    size={19}
                                    className="text-[#7A9433]"
                                />

                            </div>


                            <div>

                                <p className="text-xs text-gray-500 mb-1">
                                    Tanggal Dikirim
                                </p>

                                <p className="text-sm font-medium text-gray-700">
                                    {formattedDate}
                                </p>

                            </div>

                        </div>


                        {/* Message */}

                        <div
                            className="
                                mt-8
                                border-t
                                border-gray-100
                                pt-6
                            "
                        >

                            <div className="flex items-center gap-2 mb-3">

                                <MessageSquare
                                    size={18}
                                    className="text-[#23478F]"
                                />

                                <h2 className="text-base font-semibold text-gray-800">
                                    Isi Pesan
                                </h2>

                            </div>


                            <div
                                className="
                                    rounded-xl
                                    border
                                    border-gray-200
                                    bg-gray-50
                                    p-5
                                    text-sm
                                    text-gray-700
                                    leading-relaxed
                                    whitespace-pre-wrap
                                    break-words
                                "
                            >
                                {contact.message}
                            </div>

                        </div>


                        {/* Actions */}

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                pt-6
                                mt-6
                                border-t
                                border-gray-100
                            "
                        >

                            {/* Delete */}

                            <AlertDialog>

                                <AlertDialogTrigger asChild>

                                    <button
                                        type="button"
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            px-5
                                            py-3
                                            rounded-xl
                                            border
                                            border-red-200
                                            text-red-600
                                            font-semibold
                                            hover:bg-red-50
                                            transition
                                        "
                                    >

                                        <Trash2 size={18} />

                                        Hapus Pesan

                                    </button>

                                </AlertDialogTrigger>


                                <AlertDialogContent>

                                    <AlertDialogHeader>

                                        <AlertDialogTitle>
                                            Hapus Pesan?
                                        </AlertDialogTitle>

                                        <AlertDialogDescription>
                                            Pesan yang dihapus tidak dapat
                                            dikembalikan. Apakah Anda yakin
                                            ingin menghapus pesan ini?
                                        </AlertDialogDescription>

                                    </AlertDialogHeader>


                                    <AlertDialogFooter>

                                        <AlertDialogCancel>
                                            Batal
                                        </AlertDialogCancel>


                                        <AlertDialogAction
                                            onClick={deleteContact}
                                            className="bg-red-600 hover:bg-red-700"
                                        >
                                            Hapus
                                        </AlertDialogAction>

                                    </AlertDialogFooter>

                                </AlertDialogContent>

                            </AlertDialog>


                            {/* Back */}

                            <Link
                                href="/admin/contacts"
                                className="
                                    px-5
                                    py-3
                                    rounded-xl
                                    border
                                    border-gray-200
                                    text-gray-600
                                    font-medium
                                    hover:bg-gray-50
                                    transition
                                "
                            >
                                Kembali ke Pesan
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </AdminLayout>
    );
}