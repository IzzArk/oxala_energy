import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { ArrowLeft, Save } from "lucide-react";

export default function Create() {

    const {
        data,
        setData,
        post,
        processing,
        errors,
    } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post("/admin/users");
    };

    return (
        <>
            <Head title="Tambah User" />

            <AdminLayout>

                {/* Header */}
                <div className="flex items-center justify-between mb-6">

                    <div>
                        <h1 className="text-2xl font-bold">
                            Tambah User
                        </h1>

                        <p className="text-slate-500">
                            Tambahkan pengguna baru untuk mengakses CMS
                        </p>
                    </div>

                    <Link
                        href="/admin/users"
                        className="
                            flex
                            items-center
                            gap-2
                            text-slate-600
                            hover:text-slate-900
                            transition
                        "
                    >
                        <ArrowLeft size={18} />
                        Kembali
                    </Link>

                </div>

                {/* Form */}
                <div className="bg-white rounded-xl border overflow-hidden">

                    {/* Accent */}
                    <div className="h-1 bg-[#B6C95C]" />

                    <form
                        onSubmit={submit}
                        className="p-6"
                    >

                        {/* Name */}
                        <div className="mb-5">

                            <label
                                htmlFor="name"
                                className="
                                    block
                                    text-sm
                                    font-medium
                                    text-slate-700
                                    mb-2
                                "
                            >
                                Nama
                            </label>

                            <input
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                placeholder="Masukkan nama user"
                                className="
                                    w-full
                                    rounded-lg
                                    border
                                    border-slate-300
                                    px-4
                                    py-2.5
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-blue-500
                                    focus:border-blue-500
                                "
                            />

                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name}
                                </p>
                            )}

                        </div>

                        {/* Email */}
                        <div className="mb-5">

                            <label
                                htmlFor="email"
                                className="
                                    block
                                    text-sm
                                    font-medium
                                    text-slate-700
                                    mb-2
                                "
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                placeholder="Masukkan email user"
                                className="
                                    w-full
                                    rounded-lg
                                    border
                                    border-slate-300
                                    px-4
                                    py-2.5
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-blue-500
                                    focus:border-blue-500
                                "
                            />

                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email}
                                </p>
                            )}

                        </div>

                        {/* Password */}
                        <div className="mb-5">

                            <label
                                htmlFor="password"
                                className="
                                    block
                                    text-sm
                                    font-medium
                                    text-slate-700
                                    mb-2
                                "
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                placeholder="Masukkan password"
                                className="
                                    w-full
                                    rounded-lg
                                    border
                                    border-slate-300
                                    px-4
                                    py-2.5
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-blue-500
                                    focus:border-blue-500
                                "
                            />

                            <p className="text-xs text-slate-500 mt-1">
                                Password minimal 8 karakter.
                            </p>

                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password}
                                </p>
                            )}

                        </div>

                        {/* Confirm Password */}
                        <div className="mb-6">

                            <label
                                htmlFor="password_confirmation"
                                className="
                                    block
                                    text-sm
                                    font-medium
                                    text-slate-700
                                    mb-2
                                "
                            >
                                Konfirmasi Password
                            </label>

                            <input
                                id="password_confirmation"
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                placeholder="Ulangi password"
                                className="
                                    w-full
                                    rounded-lg
                                    border
                                    border-slate-300
                                    px-4
                                    py-2.5
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-blue-500
                                    focus:border-blue-500
                                "
                            />

                            {errors.password_confirmation && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password_confirmation}
                                </p>
                            )}

                        </div>

                        {/* Actions */}
                        <div className="flex justify-end gap-3">

                            <Link
                                href="/admin/users"
                                className="
                                    px-4
                                    py-2
                                    rounded-lg
                                    border
                                    border-slate-300
                                    text-slate-600
                                    hover:bg-slate-50
                                    transition
                                "
                            >
                                Batal
                            </Link>

                            <button
                                type="submit"
                                disabled={processing}
                                className="
                                    bg-blue-600
                                    hover:bg-blue-700
                                    text-white
                                    px-5
                                    py-2
                                    rounded-lg
                                    flex
                                    items-center
                                    gap-2
                                    transition
                                    disabled:opacity-50
                                    disabled:cursor-not-allowed
                                "
                            >
                                <Save size={18} />

                                {processing
                                    ? "Menyimpan..."
                                    : "Simpan User"}
                            </button>

                        </div>

                    </form>

                </div>

            </AdminLayout>
        </>
    );
}