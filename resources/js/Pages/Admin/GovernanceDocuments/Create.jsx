import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";
import { ArrowLeft, Upload } from "lucide-react";

export default function Create() {

    const { data, setData, post, processing, errors } =
        useForm({
            title: "",
            category: "",
            description: "",
            file: null,
            sort_order: 0,
            is_active: true,
        });

    const submit = (e) => {
        e.preventDefault();
        post("/admin/governance-documents");
    };

    return (
        <AdminLayout>

            <Head title="Tambah Dokumen" />

            <h1 className="text-2xl font-bold mb-6">

            </h1>
            <div className="mb-8">

                <a
                    href="/admin/governance-documents"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-[#23478F]"
                >
                    <ArrowLeft size={18} />

                    Kembali
                </a>

                <h1 className="text-2xl font-bold text-[#23478F] mt-4">
                    Tambah Dokumen Keterbukaan Informasi
                </h1>

                <p className="text-gray-500 mt-1">
                    Tambahkan data dokumen keterbukaan informasi.
                </p>

            </div>

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

                    <label>Category</label>

                    <input
                        type="text"
                        value={data.category}
                        onChange={(e) =>
                            setData("category", e.target.value)
                        }
                        className="w-full border rounded-lg p-3 mt-2"
                    />

                    <p className="text-red-500 text-sm">
                        {errors.category}
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

                    <label className="block mb-2 font-medium">
                        Upload Dokumen
                    </label>

                    <label
                        className="
                                flex
                                flex-col
                                items-center
                                justify-center
                                w-full
                                h-48
                                border-2
                                border-dashed
                                border-gray-200
                                rounded-xl
                                cursor-pointer
                                hover:border-[#B6C95C]
                                transition
                            "
                    >

                        <Upload
                            size={32}
                            className="text-gray-400 mb-3"
                        />

                        <span className="text-sm text-gray-600">
                            Klik untuk upload file
                        </span>

                        <span className="text-xs text-gray-400 mt-1">
                            PDF · Maks. 5MB
                        </span>

                        <input
                            type="file"
                            accept=".pdf"
                            className="hidden"
                            onChange={(e) =>
                                setData(
                                    "file",
                                    e.target.files[0]
                                )
                            }
                        />

                    </label>
                    {data.file && (
                        <p className="text-sm text-gray-500 mt-2">
                            {data.file.name}
                        </p>
                    )}

                    {errors.file && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.file}
                        </p>
                    )}
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
                    type="submit"
                    disabled={processing}
                    className="bg-[#23478F] text-white px-6 py-3 rounded-lg"
                >
                    Simpan
                </button>

            </form>

        </AdminLayout>
    );
}