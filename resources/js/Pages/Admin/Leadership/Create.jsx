import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/react";
import { ArrowLeft, Upload } from "lucide-react";

export default function Create() {

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        position: "",
        photo: null,
        is_active: true,
        sort_order: 0,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.leadership.store"));
    };

    return (
        <AdminLayout>

            <div className="max-w-3xl">

                <div className="mb-8">

                    <a
                        href={route("admin.leadership.index")}
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-[#23478F]"
                    >
                        <ArrowLeft size={18} />

                        Kembali
                    </a>

                    <h1 className="text-2xl font-bold text-[#23478F] mt-4">
                        Tambah Leadership
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Tambahkan data anggota leadership perusahaan.
                    </p>

                </div>

                <form
                    onSubmit={submit}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-6"
                >

                    {/* Nama */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nama
                        </label>

                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) =>
                                setData("name", e.target.value)
                            }
                            className="w-full border rounded p-2"
                            placeholder="Contoh: John Doe"
                        />

                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name}
                            </p>
                        )}

                    </div>

                    {/* Jabatan */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Jabatan
                        </label>

                        <input
                            type="text"
                            value={data.position}
                            onChange={(e) =>
                                setData("position", e.target.value)
                            }
                            className="w-full border rounded p-2"
                            placeholder="Contoh: Komisaris Utama"
                        />

                        {errors.position && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.position}
                            </p>
                        )}

                    </div>

                    {/* Foto */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Foto
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
                                Klik untuk upload foto
                            </span>

                            <span className="text-xs text-gray-400 mt-1">
                                JPG, PNG, WEBP · Maks. 5MB
                            </span>

                            <span className="text-xs text-[#7A9433] font-medium mt-1">
                                Rasio foto wajib 4:3
                            </span>

                            <input
                                type="file"
                                accept="image/jpeg,image/png,image/webp"
                                className="hidden"
                                onChange={(e) =>
                                    setData(
                                        "photo",
                                        e.target.files[0]
                                    )
                                }
                            />

                        </label>

                        {data.photo && (
                            <p className="text-sm text-gray-500 mt-2">
                                {data.photo.name}
                            </p>
                        )}

                        {errors.photo && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.photo}
                            </p>
                        )}

                    </div>

                    {/* Sort Order */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Urutan
                        </label>

                        <input
                            type="number"
                            min="0"
                            value={data.sort_order}
                            onChange={(e) =>
                                setData(
                                    "sort_order",
                                    e.target.value
                                )
                            }
                            className="w-full border rounded p-2"
                        />

                    </div>

                    {/* Active */}

                    <div className="flex items-center gap-3">

                        <input
                            type="checkbox"
                            checked={data.is_active}
                            onChange={(e) =>
                                setData(
                                    "is_active",
                                    e.target.checked
                                )
                            }
                            className="rounded border-gray-300 text-[#23478F] focus:ring-[#23478F]"
                        />

                        <div>

                            <p className="font-medium text-gray-700">
                                Aktif
                            </p>

                            <p className="text-xs text-gray-400">
                                Tampilkan data ini pada halaman website.
                            </p>

                        </div>

                    </div>

                    {/* Submit */}

                    <div className="flex justify-end pt-4">

                        <button
                            type="submit"
                            disabled={processing}
                            className="
                                px-6
                                py-3
                                rounded-xl
                                bg-[#23478F]
                                text-white
                                font-semibold
                                hover:bg-[#18386B]
                                disabled:opacity-50
                                transition
                            "
                        >
                            {processing
                                ? "Menyimpan..."
                                : "Simpan Leadership"}
                        </button>

                    </div>

                </form>

            </div>

        </AdminLayout>
    );
}