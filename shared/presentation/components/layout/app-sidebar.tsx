import { Sidebar, SidebarHeader,SidebarContent } from "@/shared/presentation/components/ui/sidebar";
import { Users, Home } from "lucide-react";
import NavPages from "@/shared/presentation/components/layout/nav-pages";
import LoginUser from "@/shared/presentation/components/layout/login-user";

const AppSidebar = () => {

    const pages = [
        { name: "Home", url: "/", icon: Home },
        { name: "Users", url: "/users", icon: Users }
    ]

    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex items-center justify-center gap-2 w-full">
                    <span className="text-xl font-semibold">Workout Logbook</span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <NavPages pages={pages} />
            </SidebarContent>
            <LoginUser />
            
        </Sidebar>
    );
}
 
export default AppSidebar;

