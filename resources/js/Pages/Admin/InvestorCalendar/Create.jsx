import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";

export default function Create() {

    const { data, setData, post, processing, errors } = useForm({
        title: "",
        event_date: "",
    });

    function submit(e) {
        e.preventDefault();

        post("/admin/investor-calendar");
    }

    return (
        <>
            <Head title="Tambah Kalender Investor" />
            <AdminLayout>

                <div className="max-w-3xl">

                    <div className="mb-8">

                        <a
                            href="/admin/investor-calendar"
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#23478F]"
                        >
                            <ArrowLeft size={18} />

                            Kembali
                        </a>

                        <h1 className="text-2xl font-bold text-[#23478F] mt-4">
                            Tambah Kalender Investor
                        </h1>

                        <p className="text-gray-500 mt-1">
                            Tambahkan data kalender investor.
                        </p>

                    </div>
                    <form
                        onSubmit={submit}
                        className="bg-white border rounded-xl p-6 space-y-6"
                    >

                        <div>

                            <label className="block mb-2 font-medium">
                                Judul Agenda
                            </label>

                            <input
                                type="text"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                className="w-full border rounded-lg p-3"
                            />

                            {errors.title && (
                                <p className="text-red-500 text-sm mt-2">
                                    {errors.title}
                                </p>
                            )}

                        </div>

                        <div>

                            <label className="block mb-2 font-medium">
                                Tanggal Agenda
                            </label>

                            <input
                                type="date"
                                value={data.event_date}
                                onChange={(e) =>
                                    setData("event_date", e.target.value)
                                }
                                className="w-full border rounded-lg p-3"
                            />

                            {errors.event_date && (
                                <p className="text-red-500 text-sm mt-2">
                                    {errors.event_date}
                                </p>
                            )}

                        </div>

                        <button
                            disabled={processing}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
                        >
                            Simpan
                        </button>

                    </form>

                </div>

            </AdminLayout>
        </>
    );
}