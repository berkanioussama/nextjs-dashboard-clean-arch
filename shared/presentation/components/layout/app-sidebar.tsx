import { Sidebar, SidebarHeader,SidebarContent } from "@/shared/presentation/components/ui/sidebar";
import { Users, Home, Quote } from "lucide-react";
import NavPages from "@/shared/presentation/components/layout/nav-pages";
import LoginUser from "@/shared/presentation/components/layout/login-user";

const AppSidebar = () => {

    const pages = [
        { name: "Home", url: "/", icon: Home },
        { name: "Users", url: "/users", icon: Users },
        { name: "Quotes", url: "/quotes", icon: Quote }
    ]

    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex items-center justify-center gap-2 w-full py-2">
                    <span className="text-xl font-bold">NextJS Dashboard</span>
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

