import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/react";

export default function Create() {

    const { data, setData, post, processing } = useForm({
        title: "",
        year: "",
        file: null,
        is_active: true,
    });

    const submit = (e) => {
        e.preventDefault();
        post("/admin/annual-reports");
    };

    return (

        <AdminLayout>

            <div className="max-w-3xl">

                <h1 className="text-2xl font-bold mb-6">
                    Tambah Annual Report
                </h1>

                <form
                    onSubmit={submit}
                    className="bg-white border rounded-xl p-8 shadow-sm space-y-5"
                >

                    <div>

                        <label className="block mb-2 font-medium">
                            Judul
                        </label>

                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) =>
                                setData("title", e.target.value)
                            }
                            className="w-full border rounded-lg p-3"
                        />

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">
                            Tahun
                        </label>

                        <input
                            type="number"
                            value={data.year}
                            onChange={(e) =>
                                setData("year", e.target.value)
                            }
                            className="w-full border rounded-lg p-3"
                        />

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">
                            Upload PDF
                        </label>

                        <input
                            type="file"
                            accept=".pdf"
                            onChange={(e) =>
                                setData("file", e.target.files[0])
                            }
                        />

                    </div>

                    <div>

                        <label className="flex gap-3 items-center">

                            <input
                                type="checkbox"
                                checked={data.is_active}
                                onChange={(e) =>
                                    setData(
                                        "is_active",
                                        e.target.checked
                                    )
                                }
                            />

                            Aktif

                        </label>

                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-[#23478F] text-white px-6 py-3 rounded-lg"
                    >
                        Simpan
                    </button>

                </form>

            </div>

        </AdminLayout>

    );
}