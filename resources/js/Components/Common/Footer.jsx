import { Link, usePage } from "@inertiajs/react";
import Logo from "../../../Assets/Oxala-Logo.png";
import { useTranslation } from "react-i18next";

export default function Footer() {

    const currentYear = new Date().getFullYear();
    const { t } = useTranslation("common");

    const { settings } = usePage().props;

    return (
        <footer className="bg-white border-t">

            <div className="max-w-7xl mx-auto px-6 py-20">

                <div className="grid lg:grid-cols-4 gap-12">

                    <div>
                        <img
                            src={`/storage/${settings.logo}`}
                            alt={settings.company_name}
                            className="h-20 mb-2"
                        />

                        <p className="text-gray-600 leading-relaxed">
                            {t("common:footer.description")}
                        </p>
                    </div>

                    {/* Navigasi */}
                    <div>

                        <h4 className="font-bold text-[#23478F] mb-5">
                            {t("common:footer.navigation")}
                        </h4>

                        <ul className="space-y-3 text-gray-600">

                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-[#23478F]"
                                >
                                    {t("common:footer.home")}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/tentang-kami"
                                    className="hover:text-[#23478F]"
                                >
                                    {t("common:footer.about")}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/keterbukaan-informasi"
                                    className="hover:text-[#23478F]"
                                >
                                    {t("common:footer.information")}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/berita"
                                    className="hover:text-[#23478F]"
                                >
                                    {t("common:footer.news")}
                                </Link>
                            </li>

                        </ul>

                    </div>

                    {/* Korporasi */}
                    <div>

                        <h4 className="font-bold text-[#23478F] mb-5">
                            {t("common:footer.corporate")}
                        </h4>

                        <ul className="space-y-3 text-gray-600">
                            <li>
                                <Link
                                    href="/produk"
                                    className="hover:text-[#23478F]"
                                >
                                    {t("common:footer.products")}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/hubungan-investor"
                                    className="hover:text-[#23478F]"
                                >
                                    {t("common:footer.investor")}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/hubungi-kami"
                                    className="hover:text-[#23478F]"
                                >
                                    {t("common:footer.contact")}
                                </Link>
                            </li>



                        </ul>

                    </div>

                    {/* Contact */}
                    <div>

                        <h4 className="font-bold text-[#23478F] mb-5">
                            {t("common:footer.contactUs")}
                        </h4>

                        <p className="text-gray-600">
                            {settings.address}
                        </p>

                        <p className="mt-4 font-semibold text-[#23478F]">
                            {settings.email}
                        </p>

                    </div>

                </div>

                <div className="border-t mt-12 pt-8">

                    <div className="flex flex-col lg:flex-row justify-between text-sm text-gray-500">

                        <span>
                            © {currentYear} Oxalá Energy & Infrastructure.
                            All Rights Reserved.
                        </span>

                        <div className="flex gap-8 mt-4 lg:mt-0">

                            <a href="#">
                                {t("common:footer.privacy")}
                            </a>

                            <a href="#">
                                {t("common:footer.terms")}
                            </a>

                            <a href="#">
                                {t("common:footer.ethics")}
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}