import { useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { ArrowLeft } from "lucide-react";


export default function Create() {

    const { data, setData, post, processing, errors } = useForm({
        title: "",
        subtitle: "",
        description: "",
        button_text: "",
        button_link: "",
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();

        post("/admin/banner");
    };

    return (
        <AdminLayout>

            <div className="max-w-3xl">
                <div className="mb-8">

                    <a
                        href="/admin/banner"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-[#23478F]"
                    >
                        <ArrowLeft size={18} />

                        Kembali
                    </a>

                    <h1 className="text-2xl font-bold text-[#23478F] mt-4">
                        Tambah Banner
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Tambahkan Foto Banner.
                    </p>

                </div>


                <form
                    onSubmit={submit}
                    className="space-y-4 bg-white p-6 rounded-xl shadow-sm border"
                >

                    <input
                        type="text"
                        placeholder="Judul Banner"
                        value={data.title}
                        onChange={(e) =>
                            setData("title", e.target.value)
                        }
                        className="w-full border rounded p-2"
                    />

                    {errors.title && (
                        <div className="text-red-500">
                            {errors.title}
                        </div>
                    )}

                    <input
                        type="text"
                        placeholder="Sub Judul"
                        value={data.subtitle}
                        onChange={(e) =>
                            setData("subtitle", e.target.value)
                        }
                        className="w-full border rounded p-2"
                    />

                    <textarea
                        placeholder="Deskripsi"
                        value={data.description}
                        onChange={(e) =>
                            setData("description", e.target.value)
                        }
                        className="w-full border rounded p-2"
                    />

                    <input
                        type="text"
                        placeholder="Button Text"
                        value={data.button_text}
                        onChange={(e) =>
                            setData("button_text", e.target.value)
                        }
                        className="w-full border rounded p-2"
                    />

                    <input
                        type="text"
                        placeholder="Button Link"
                        value={data.button_link}
                        onChange={(e) =>
                            setData("button_link", e.target.value)
                        }
                        className="w-full border rounded p-2"
                    />

                    <input
                        type="file"
                        onChange={(e) =>
                            setData("image", e.target.files[0])
                        }
                    />
                    <div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-4 py-2 bg-blue-600 text-white rounded"
                        >
                            Simpan Banner
                        </button>
                    </div>
                </form>

            </div>
        </AdminLayout>
    );
}