import AppSidebar from "@/Components/Admin/AppSidebar";
import AppHeader from "@/Components/Admin/AppHeader";

export default function AdminLayout({ children }) {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="flex">
                {/* Sidebar Desktop */}
                <div className="hidden md:block">
                    <AppSidebar />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <AppHeader />

                    <main className="p-4 md:p-6">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}