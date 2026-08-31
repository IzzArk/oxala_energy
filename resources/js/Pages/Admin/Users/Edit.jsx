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
} from "@/Components/ui/alert-dialog";

export default function Edit({ user }) {

    const {
        data,
        setData,
        put,
        processing,
        errors,
    } = useForm({
        name: user.name ?? "",
        email: user.email ?? "",
        password: "",
        password_confirmation: "",
    });


    const submit = (e) => {
        e.preventDefault();

        put(`/admin/users/${user.id}`);
    };


    const deleteUser = () => {
        router.delete(`/admin/users/${user.id}`);
    };


    return (

        <AdminLayout>

            <Head title="Edit User" />

            <div className="max-w-3xl">

                {/* Header */}

                <div className="mb-8">

                    <Link
                        href="/admin/users"
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
                        Edit User
                    </h1>


                    <p className="text-gray-500 mt-1">
                        Perbarui informasi pengguna administrator CMS.
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

                    {/* Informasi User */}

                    <div>

                        <div className="mb-5">

                            <h2 className="text-base font-semibold text-gray-800">
                                Informasi Pengguna
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                Perbarui nama dan alamat email pengguna.
                            </p>

                        </div>


                        {/* Nama */}

                        <div className="mb-5">

                            <label
                                htmlFor="name"
                                className="
                                    block
                                    text-sm
                                    font-medium
                                    text-gray-700
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
                                    setData(
                                        "name",
                                        e.target.value
                                    )
                                }
                                placeholder="Masukkan nama user"
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


                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name}
                                </p>
                            )}

                        </div>


                        {/* Email */}

                        <div>

                            <label
                                htmlFor="email"
                                className="
                                    block
                                    text-sm
                                    font-medium
                                    text-gray-700
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
                                    setData(
                                        "email",
                                        e.target.value
                                    )
                                }
                                placeholder="Masukkan email user"
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


                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email}
                                </p>
                            )}

                        </div>

                    </div>


                    {/* Password */}

                    <div
                        className="
                            border-t
                            border-gray-100
                            pt-6
                        "
                    >

                        <div className="mb-5">

                            <h2 className="text-base font-semibold text-gray-800">
                                Ubah Password
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                Kosongkan kedua field jika tidak ingin
                                mengubah password.
                            </p>

                        </div>


                        {/* Password Baru */}

                        <div className="mb-5">

                            <label
                                htmlFor="password"
                                className="
                                    block
                                    text-sm
                                    font-medium
                                    text-gray-700
                                    mb-2
                                "
                            >
                                Password Baru
                            </label>


                            <input
                                id="password"
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData(
                                        "password",
                                        e.target.value
                                    )
                                }
                                placeholder="Masukkan password baru"
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


                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password}
                                </p>
                            )}

                        </div>


                        {/* Konfirmasi Password */}

                        <div>

                            <label
                                htmlFor="password_confirmation"
                                className="
                                    block
                                    text-sm
                                    font-medium
                                    text-gray-700
                                    mb-2
                                "
                            >
                                Konfirmasi Password Baru
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
                                placeholder="Ulangi password baru"
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


                            {errors.password_confirmation && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password_confirmation}
                                </p>
                            )}

                        </div>


                        {/* Password Note */}

                        <div
                            className="
                                mt-4
                                p-3
                                rounded-xl
                                bg-[#FAFCF3]
                                border
                                border-[#E8EDCF]
                                text-xs
                                text-gray-600
                            "
                        >
                            <strong>Catatan:</strong>{" "}
                            Password hanya perlu diisi jika Anda ingin
                            mengganti password pengguna.
                        </div>

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

                                    Hapus User

                                </button>

                            </AlertDialogTrigger>


                            <AlertDialogContent>

                                <AlertDialogHeader>

                                    <AlertDialogTitle>
                                        Hapus User?
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        User yang dihapus tidak dapat
                                        dikembalikan. Apakah Anda yakin
                                        ingin menghapus user ini?
                                    </AlertDialogDescription>

                                </AlertDialogHeader>


                                <AlertDialogFooter>

                                    <AlertDialogCancel>
                                        Batal
                                    </AlertDialogCancel>


                                    <AlertDialogAction
                                        onClick={deleteUser}
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
                                href="/admin/users"
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