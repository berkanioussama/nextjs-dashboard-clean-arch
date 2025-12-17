'use client'

import { useUser } from "@clerk/nextjs";
import { NavUser } from "@/shared/ui/components/layout/nav-user";
import { Sidebar, SidebarHeader,SidebarContent, SidebarFooter } from "@/shared/ui/components/ui/sidebar";
import { Users, Home } from "lucide-react";
import NavPages from "@/shared/ui/components/layout/nav-pages";
import { useFindUserByProviderId } from "@/modules/user/ui/hooks/use-find-user-by-provider-id.hook";

const AppSidebar = () => {
    const { user } = useUser();
    if (!user) return null;

    const {data: userData, isLoading, error} = useFindUserByProviderId({ userProviderId: user.id })

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
            {isLoading && <div className="p-4">Loading user data...</div>}
            {error && <div className="p-4">Error: {error.message}</div>}
            {userData && (
                <SidebarFooter>
                    <NavUser 
                        name= {userData.name} 
                        email= {userData.email} 
                        avatar={userData.image}
                    />
                </SidebarFooter>
            )}
            
        </Sidebar>
    );
}
 
export default AppSidebar;