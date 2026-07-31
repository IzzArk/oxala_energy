import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Create() {

    const { data, setData, post, processing, errors } =
        useForm({
            title: "",
            description: "",
            file: null,
            sort_order: 0,
            is_active: true,
        });

    function submit(e) {
        e.preventDefault();

        post(route("admin.governance-documents.store"));
    }

    return (
        <AdminLayout>

            <Head title="Tambah Governance Document" />

            <h1 className="text-2xl font-bold mb-6">
                Tambah Governance Document
            </h1>

            <form
                onSubmit={submit}
                className="bg-white border rounded-xl p-6 space-y-5"
            >

                <div>

                    <label>Judul</label>

                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) =>
                            setData("title", e.target.value)
                        }
                        className="w-full border rounded-lg p-3 mt-2"
                    />

                    <p className="text-red-500 text-sm">
                        {errors.title}
                    </p>

                </div>

                <div>

                    <label>Deskripsi</label>

                    <textarea
                        rows="4"
                        value={data.description}
                        onChange={(e) =>
                            setData("description", e.target.value)
                        }
                        className="w-full border rounded-lg p-3 mt-2"
                    />

                </div>

                <div>

                    <label>Upload PDF</label>

                    <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) =>
                            setData(
                                "file",
                                e.target.files[0]
                            )
                        }
                        className="mt-2"
                    />

                </div>

                <div>

                    <label>Urutan</label>

                    <input
                        type="number"
                        value={data.sort_order}
                        onChange={(e) =>
                            setData(
                                "sort_order",
                                e.target.value
                            )
                        }
                        className="w-full border rounded-lg p-3 mt-2"
                    />

                </div>

                <label className="flex items-center gap-2">

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

                <button
                    disabled={processing}
                    className="bg-[#23478F] text-white px-6 py-3 rounded-lg"
                >
                    Simpan
                </button>

            </form>

        </AdminLayout>
    );
}