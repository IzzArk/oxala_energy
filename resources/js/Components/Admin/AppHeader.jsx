import { router } from "@inertiajs/react";
import { Menu } from "lucide-react";

import AppSidebar from "./AppSidebar";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar";

export default function AppHeader() {
    return (
        <header className="h-16 border-b bg-white flex items-center justify-between px-4 md:px-6">

            {/* Mobile Menu */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <button>
                            <Menu size={24} />
                        </button>
                    </SheetTrigger>

                    <SheetContent side="left" className="p-0 w-64">
                        <AppSidebar mobile />
                    </SheetContent>
                </Sheet>
            </div>

            <div />

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarFallback>
                            A
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                    <DropdownMenuItem
                        onClick={() => router.visit('/profile')}
                    >
                        Profile
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onClick={() => router.post("/logout")}
                    >
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </header>
    );
}