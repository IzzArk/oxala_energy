import {
    LayoutDashboard,
    Image,
    Newspaper,
    FolderOpen,
    FileText,
    Phone,
    Settings,
    Calendar,
} from "lucide-react";

import { Link, usePage } from "@inertiajs/react";

export default function AppSidebar({ mobile = false }) {

    const { unreadCount = 0 } = usePage().props;

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
            href: "/admin/contacts",
            badge: unreadCount,
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
                    title: "Dokument Tata Kelola",
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
                                <div className="flex items-center gap-3 px-4 py-3 text-sm font-semibold ">
                                    <item.icon size={18} />
                                    {item.title}
                                </div>

                                <div className="ml-7 mt-1 space-y-1 border-l pl-4">
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.title}
                                            href={child.href}
                                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-slate-100"
                                        >
                                            <child.icon size={16} />
                                            {child.title}
                                        </Link>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <Link
                                href={item.href}
                                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm hover:bg-slate-100"
                            >
                                <item.icon size={18} />
                                {item.title}

                                {item.badge > 0 && (
                                    <span
                                        className="
                                    bg-red-500
                                    text-white
                                    text-xs
                                    font-medium
                                    min-w-[22px]
                                    h-[22px]
                                    px-2
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                "
                                    >
                                        {item.badge}
                                    </span>
                                )}
                            </Link>
                        )}
                    </div>

                ))}
            </nav>

        </aside>
    );
}