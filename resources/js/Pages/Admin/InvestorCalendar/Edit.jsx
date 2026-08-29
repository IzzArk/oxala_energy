import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm, router } from "@inertiajs/react";
import {
    ArrowLeft,
    Save,
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

export default function Edit({ event }) {

    const {
        data,
        setData,
        put,
        processing,
        errors,
    } = useForm({
        title: event.title ?? "",
        event_date: event.event_date ?? "",
    });


    const submit = (e) => {
        e.preventDefault();

        put(`/admin/investor-calendar/${event.id}`);
    };


    const deleteEvent = () => {
        router.delete(
            `/admin/investor-calendar/${event.id}`
        );
    };


    return (

        <AdminLayout>

            <Head title="Edit Kalender Investor" />

            <div className="max-w-3xl">

                {/* Header */}

                <div className="mb-8">

                    <Link
                        href="/admin/investor-calendar"
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
                        Edit Kalender Investor
                    </h1>


                    <p className="text-gray-500 mt-1">
                        Perbarui informasi agenda pada kalender investor.
                    </p>

                </div>


                {/* Form */}

                <form
                    onSubmit={submit}
                    className="
                        bg-white
                        rounded-2xl
                        border
                        border-gray-100
                        shadow-sm
                        p-8
                        space-y-6
                    "
                >

                    {/* Judul Agenda */}

                    <div>

                        <label
                            htmlFor="title"
                            className="
                                block
                                text-sm
                                font-medium
                                text-gray-700
                                mb-2
                            "
                        >
                            Judul Agenda
                        </label>


                        <input
                            id="title"
                            type="text"
                            value={data.title}
                            onChange={(e) =>
                                setData(
                                    "title",
                                    e.target.value
                                )
                            }
                            placeholder="Contoh: Rapat Umum Pemegang Saham"
                            className="
                                w-full
                                border
                                border-gray-200
                                rounded-xl
                                px-4
                                py-3
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[#B6C95C]
                                focus:border-[#B6C95C]
                                transition
                            "
                        />


                        {errors.title && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.title}
                            </p>
                        )}

                    </div>


                    {/* Tanggal */}

                    <div>

                        <label
                            htmlFor="event_date"
                            className="
                                block
                                text-sm
                                font-medium
                                text-gray-700
                                mb-2
                            "
                        >
                            Tanggal Agenda
                        </label>


                        <input
                            id="event_date"
                            type="date"
                            value={data.event_date}
                            onChange={(e) =>
                                setData(
                                    "event_date",
                                    e.target.value
                                )
                            }
                            className="
                                w-full
                                border
                                border-gray-200
                                rounded-xl
                                px-4
                                py-3
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[#B6C95C]
                                focus:border-[#B6C95C]
                                transition
                            "
                        />


                        {errors.event_date && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.event_date}
                            </p>
                        )}

                    </div>


                    {/* Information */}

                    <div
                        className="
                            p-4
                            rounded-xl
                            bg-[#FAFCF3]
                            border
                            border-[#E8EDCF]
                        "
                    >

                        <p className="text-sm text-gray-600">
                            Pastikan judul dan tanggal agenda sudah sesuai
                            sebelum menyimpan perubahan.
                        </p>

                    </div>


                    {/* Actions */}

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            pt-5
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

                                    Hapus Agenda

                                </button>

                            </AlertDialogTrigger>


                            <AlertDialogContent>

                                <AlertDialogHeader>

                                    <AlertDialogTitle>
                                        Hapus Agenda?
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        Agenda yang dihapus tidak dapat
                                        dikembalikan. Apakah Anda yakin
                                        ingin menghapus agenda ini?
                                    </AlertDialogDescription>

                                </AlertDialogHeader>


                                <AlertDialogFooter>

                                    <AlertDialogCancel>
                                        Batal
                                    </AlertDialogCancel>


                                    <AlertDialogAction
                                        onClick={deleteEvent}
                                        className="bg-red-600 hover:bg-red-700"
                                    >
                                        Hapus
                                    </AlertDialogAction>

                                </AlertDialogFooter>

                            </AlertDialogContent>

                        </AlertDialog>


                        {/* Right Actions */}

                        <div className="flex items-center gap-3">

                            <Link
                                href="/admin/investor-calendar"
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
                                Batal
                            </Link>


                            <button
                                type="submit"
                                disabled={processing}
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    px-6
                                    py-3
                                    rounded-xl
                                    bg-[#23478F]
                                    text-white
                                    font-semibold
                                    hover:bg-[#18386B]
                                    disabled:opacity-50
                                    disabled:cursor-not-allowed
                                    transition
                                "
                            >

                                <Save size={18} />

                                {processing
                                    ? "Menyimpan..."
                                    : "Simpan Perubahan"}

                            </button>

                        </div>

                    </div>

                </form>

            </div>

        </AdminLayout>
    );
}