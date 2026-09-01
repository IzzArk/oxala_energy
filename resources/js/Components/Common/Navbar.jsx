import { useState } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Link, usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import "flag-icons/css/flag-icons.min.css";



export default function Navbar() {
    const [open, setOpen] = useState(false);

    const { url } = usePage();

    const navClass = (href) =>
        `
    relative
    transition
    pb-1
    ${url === href
            ? "text-[#23478F] font-semibold"
            : "text-gray-700 hover:text-[#23478F]"
        }
`;
    const [aboutOpen, setAboutOpen] = useState(false);
    const [investorOpen, setInvestorOpen] = useState(false);
    const [informationOpen, setInformationOpen] = useState(false);
    const { t, i18n } = useTranslation("common");

    const [languageOpen, setLanguageOpen] = useState(false);
    const { settings } = usePage().props;
    return (
        <header className="bg-white border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="h-20 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/">
                        <img
                            src={`/storage/${settings.logo}`}
                            alt={settings.company_name}
                            className="h-20"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-8 text-[1rem]">

                        <Link href="/" className={navClass("/")}>
                            {t("common:navbar.home")}
                        </Link>

                        <div
                            className="relative flex items-center"
                            onMouseEnter={() => setAboutOpen(true)}
                            onMouseLeave={() => setAboutOpen(false)}
                        >
                            {/* Link tetap bisa diklik */}
                            <Link
                                href="/tentang-kami"
                                className={navClass("/tentang-kami")}
                            >
                                {t("common:navbar.about")}
                            </Link>

                            {/* Tombol dropdown */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setAboutOpen(!aboutOpen);
                                }}
                                className="ml-1 p-1"
                            >
                                <ChevronDown
                                    size={16}
                                    className={`transition ${aboutOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {aboutOpen && (
                                <div
                                    className="
                absolute
                top-full
                left-0
                mt-0
                w-64
                bg-white
                rounded-xl
                shadow-xl
                border
                overflow-hidden
                z-50
            "
                                >
                                    <a
                                        href="/tentang-kami#profil"
                                        className="block px-5 py-3 hover:bg-gray-50"
                                    >
                                        {t("common:navbar.companyProfile")}
                                    </a>

                                    <a
                                        href="/tentang-kami#visi-misi"
                                        className="block px-5 py-3 hover:bg-gray-50"
                                    >
                                        {t("common:navbar.visionMission")}
                                    </a>

                                    <a
                                        href="/tentang-kami#direksi-komisaris"
                                        className="block px-5 py-3 hover:bg-gray-50"
                                    >
                                        {t("common:navbar.board")}
                                    </a>
                                    <a
                                        href="/tentang-kami#kontak"
                                        className="block px-5 py-3 hover:bg-gray-50"
                                    >
                                        {t("common:navbar.contact")}
                                    </a>
                                </div>
                            )}
                        </div>

                        <div
                            className="relative flex items-center"
                            onMouseEnter={() => setInvestorOpen(true)}
                            onMouseLeave={() => setInvestorOpen(false)}
                        >

                            {/* Link utama */}
                            <Link
                                href="/hubungan-investor"
                                className={navClass("/hubungan-investor")}
                            >
                                {t("common:navbar.investor")}
                            </Link>

                            {/* Tombol Dropdown */}
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setInvestorOpen(!investorOpen);
                                }}
                                className="ml-1 p-1"
                            >
                                <ChevronDown
                                    size={16}
                                    className={`transition ${investorOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {investorOpen && (
                                <div
                                    className="
                absolute
                top-full
                left-0
                mt-0
                w-64
                bg-white
                rounded-xl
                shadow-xl
                border
                overflow-hidden
                z-50
            "
                                >

                                    <a
                                        href="/hubungan-investor#laporan-tahunan"
                                        className="
                    block
                    px-5
                    py-3
                    hover:bg-gray-50
                    transition
                "
                                    >
                                        {t("common:navbar.annualReport")}
                                    </a>

                                    <a
                                        href="/hubungan-investor#kalender-investor"
                                        className="
                    block
                    px-5
                    py-3
                    hover:bg-gray-50
                    transition
                "
                                    >
                                        {t("common:navbar.investorCalendar")}
                                    </a>

                                </div>
                            )}

                        </div>

                        <div
                            className="relative flex items-center"
                            onMouseEnter={() => setInformationOpen(true)}
                            onMouseLeave={() => setInformationOpen(false)}
                        >

                            {/* Link utama */}
                            <Link
                                href="/keterbukaan-informasi"
                                className={navClass("/keterbukaan-informasi")}
                            >
                                {t("common:navbar.information")}
                            </Link>

                            {/* Tombol Dropdown */}
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setInformationOpen(!informationOpen);
                                }}
                                className="ml-1 p-1"
                            >
                                <ChevronDown
                                    size={16}
                                    className={`transition ${informationOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {informationOpen && (
                                <div
                                    className="
                absolute
                top-full
                left-0
                mt-0
                w-64
                bg-white
                rounded-xl
                shadow-xl
                border
                overflow-hidden
                z-50
            "
                                >


                                    <a
                                        href="/keterbukaan-informasi#dokumen-informasi"
                                        className="
                    block
                    px-5
                    py-3
                    hover:bg-gray-50
                    transition
                "
                                    >
                                        {t("common:navbar.documents")}
                                    </a>

                                </div>
                            )}

                        </div>

                        <Link
                            href="/produk"
                            className={navClass("/produk")}
                        >
                            {t("common:navbar.products")}
                        </Link>

                        <Link
                            href="/berita"
                            className={navClass("/berita")}
                        >
                            {t("common:navbar.news")}
                        </Link>

                    </nav>

                    {/* Desktop Button */}
                    <div className="hidden lg:block">

                        <Link
                            href="/hubungi-kami"
                            className="
                                bg-[#23478F]
                                text-white
                                px-5
                                py-2
                                rounded-md
                                text-sm
                                hover:bg-[#B7CA5C]
                                transition
                            "
                        >
                            {t("common:navbar.contact")}
                        </Link>

                    </div>
                    <div
                        className="fixed top-5 right-6 z-[9999] hidden lg:block"
                        onMouseEnter={() => setLanguageOpen(true)}
                        onMouseLeave={() => setLanguageOpen(false)}
                    >
                        {/* Button */}
                        <button
                            className="
            relative
            w-10
            h-10
            bg-white
            rounded-full
            border
            border-gray-200
            shadow-lg
            hover:shadow-xl
            flex
            items-center
            justify-center
            transition-all
            duration-300
        "
                        >
                            <span
                                className={`fi ${i18n.language === "id"
                                    ? "fi-id"
                                    : "fi-us"
                                    } text-lg`}
                            />

                            <ChevronDown
                                size={14}
                                className={`
                absolute
                -bottom-1
                -right-1
                bg-white
                rounded-full
                p-0.5
                shadow
                transition-transform
                duration-300
                ${languageOpen ? "rotate-180" : ""}
            `}
                            />
                        </button>

                        {/* Dropdown */}
                        {languageOpen && (
                            <div
                                className="
                absolute
                right-0
                mt-0
                w-44
                bg-white
                rounded-xl
                border
                border-gray-200
                shadow-2xl
                overflow-hidden
                z-50
            "
                            >
                                <button
                                    onClick={() => {
                                        i18n.changeLanguage("id");
                                        setLanguageOpen(false);
                                    }}
                                    className={`
                    w-full
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    hover:bg-gray-50
                    transition
                    ${i18n.language === "id"
                                            ? "bg-blue-50 text-[#23478F] font-semibold"
                                            : ""
                                        }
                `}
                                >
                                    <span className="fi fi-id rounded-sm text-xl"></span>
                                    <span>Indonesia</span>
                                </button>

                                <button
                                    onClick={() => {
                                        i18n.changeLanguage("en");
                                        setLanguageOpen(false);
                                    }}
                                    className={`
                    w-full
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    hover:bg-gray-50
                    transition
                    ${i18n.language === "en"
                                            ? "bg-blue-50 text-[#23478F] font-semibold"
                                            : ""
                                        }
                `}
                                >
                                    <span className="fi fi-us rounded-sm text-xl"></span>
                                    <span>English</span>
                                </button>
                            </div>
                        )}
                    </div>
                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden"
                    >
                        {open ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}
                    </button>

                </div>

            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="lg:hidden border-t bg-white">

                    <nav className="flex flex-col p-4">

                        <Link
                            href="/tentang-kami"
                            className={`py-3 border-b ${navClass("/tentang-kami")}`}
                            onClick={() => setOpen(false)}
                        >
                            {t("common:navbar.about")}
                        </Link>

                        <Link
                            href="/hubungan-investor"
                            className={`py-3 border-b ${navClass("/hubungan-investor")}`}
                            onClick={() => setOpen(false)}
                        >
                            {t("common:navbar.investor")}
                        </Link>

                        <Link
                            href="/keterbukaan-informasi"
                            className={`py-3 border-b ${navClass("/keterbukaan-informasi")}`}
                            onClick={() => setOpen(false)}
                        >
                            {t("common:navbar.information")}
                        </Link>

                        <Link
                            href="/produk"
                            className={`py-3 border-b ${navClass("/produk")}`}
                            onClick={() => setOpen(false)}
                        >
                            {t("common:navbar.products")}
                        </Link>

                        <Link
                            href="/berita"
                            className={`py-3 border-b ${navClass("/berita")}`}
                            onClick={() => setOpen(false)}
                        >
                            {t("common:navbar.news")}
                        </Link>

                        <Link
                            href="/hubungi-kami"
                            className="
                                mt-4
                                bg-[#23478F]
                                hover:bg-[#7A9433]
                                text-white
                                text-center
                                py-3
                                rounded-md
                            "
                            onClick={() => setOpen(false)}
                        >
                            {t("common:navbar.contact")}
                        </Link>
                        <div className="border-t mt-4 pt-4">

                            <p className="text-sm text-gray-500 mb-3">
                                Language
                            </p>

                            <button
                                onClick={() => i18n.changeLanguage("id")}
                                className={`
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-lg
            mb-2
            transition
            ${i18n.language === "id"
                                        ? "bg-[#23478F] text-white"
                                        : "bg-gray-100 hover:bg-gray-200"
                                    }
        `}
                            >
                                <span className="fi fi-id rounded-sm"></span>
                                Indonesia
                            </button>

                            <button
                                onClick={() => i18n.changeLanguage("en")}
                                className={`
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-lg
            transition
            ${i18n.language === "en"
                                        ? "bg-[#23478F] text-white"
                                        : "bg-gray-100 hover:bg-gray-200"
                                    }
        `}
                            >
                                <span className="fi fi-us rounded-sm"></span>
                                English
                            </button>

                        </div>

                    </nav>

                </div>
            )}
        </header>
    );
}