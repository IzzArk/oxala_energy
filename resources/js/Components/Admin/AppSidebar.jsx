import {
    LayoutDashboard,
    Image,
    Newspaper,
    FolderOpen,
    FileText,
    Phone,
    Calendar,
    Crown,
    MessageCircle,
    Leaf,
} from "lucide-react";

import { Link, usePage } from "@inertiajs/react";

export default function AppSidebar({ mobile = false }) {


    const {
        generalUnreadCount = 0,
        renewableUnreadCount = 0,
    } = usePage().props;

    const menus = [
        {
            title: "Dashboard",
            icon: LayoutDashboard,
            href: "/admin/dashboard",
        },
        {
            title: "Banner",
            icon: Image,
            href: "/admin/banner",
        },
        {
            title: "News",
            icon: Newspaper,
            href: "/admin/news",
        },
        {
            title: "Contact",
            icon: Phone,
            children: [
                {
                    title: "General",
                    icon: MessageCircle,
                    href: "/admin/contacts/general",
                    badge: generalUnreadCount,
                },
                {
                    title: "Renewable Energy",
                    icon: Leaf,
                    href: "/admin/contacts/renewable-energy",
                    badge: renewableUnreadCount,
                },
            ],
        },
        {
            title: "Leadership",
            icon: Crown,
            href: "/admin/leadership",
        },
        {
            title: "Documents",
            icon: FolderOpen,
            children: [
                {
                    title: "Laporan Tahunan",
                    icon: FileText,
                    href: "/admin/annual-reports",
                },
                {
                    title: "Dokument Informasi",
                    icon: FileText,
                    href: "/admin/governance-documents",
                },
            ],
        },
        {
            title: "Investor Calendar",
            icon: Calendar,
            href: "/admin/investor-calendar",
        },
    ];

    return (
        <aside
            className={`
            bg-white
            ${mobile ? "w-full h-full" : "w-64 min-h-screen border-r"}
        `}
        >
            <div className="p-6">
                <img
                    src="https://iili.io/Cok65il.png"
                    alt="Oxala"
                    className="h-15"
                />
            </div>

            <nav className="space-y-2 px-3">

                {menus.map((item) => (
                    <div key={item.title}>

                        {item.children ? (
                            <>
                                {/* Parent Menu */}
                                <div className="flex items-center gap-3 px-4 py-3 text-sm font-semibold">
                                    <item.icon size={18} />
                                    {item.title}
                                </div>

                                {/* Submenu */}
                                <div className="ml-7 mt-1 space-y-1 border-l pl-4">

                                    {item.children.map((child) => (
                                        <Link
                                            key={child.title}
                                            href={child.href}
                                            className="
                                            flex
                                            items-center
                                            justify-between
                                            gap-2
                                            rounded-lg
                                            px-3
                                            py-2
                                            text-sm
                                            hover:bg-slate-100
                                        "
                                        >
                                            <div className="flex items-center gap-2">
                                                <child.icon size={16} />

                                                <span>
                                                    {child.title}
                                                </span>
                                            </div>

                                            {/* Unread Badge */}
                                            {child.badge > 0 && (
                                                <span
                                                    className="
                                                    bg-red-500
                                                    text-white
                                                    text-xs
                                                    font-medium
                                                    min-w-[20px]
                                                    h-[20px]
                                                    px-1.5
                                                    rounded-full
                                                    flex
                                                    items-center
                                                    justify-center
                                                "
                                                >
                                                    {child.badge}
                                                </span>
                                            )}
                                        </Link>
                                    ))}

                                </div>
                            </>
                        ) : (
                            <Link
                                href={item.href}
                                className="
                                flex
                                items-center
                                gap-3
                                rounded-lg
                                px-4
                                py-3
                                text-sm
                                hover:bg-slate-100
                            "
                            >
                                <item.icon size={18} />

                                {item.title}
                            </Link>
                        )}

                    </div>
                ))}

            </nav>

        </aside>
    );

}
