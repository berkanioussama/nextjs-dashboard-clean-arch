'use client'

import { useUser } from "@clerk/nextjs";
import { NavUser } from "@/shared/presentation/components/layout/nav-user";
import { Sidebar, SidebarHeader,SidebarContent, SidebarFooter } from "@/shared/presentation/components/ui/sidebar";
import { Users, Home } from "lucide-react";
import NavPages from "@/shared/presentation/components/layout/nav-pages";
import { useFindUserByProviderId } from "@/modules/user/presentation/hooks/use-find-user-by-provider-id.hook";

const AppSidebar = () => {
    const { user } = useUser();
    if (!user) return null;

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
            <LoginUser providerId={user.id} />
            
        </Sidebar>
    );
}
 
export default AppSidebar;

const LoginUser = ({providerId}: {providerId: string}) => {

    const {data: user, isLoading, error} = useFindUserByProviderId({ providerId })

    if (isLoading) return <div className="p-2">Loading...</div>;
    if (error) return <div className="p-2 text-destructive">Error: {(error as Error).message}</div>;
    if (!user) return <div className="p-2">User not found</div>;

    return (
        <SidebarFooter>
            <NavUser 
                name= {user.name} 
                email= {user.email} 
                avatar={user.image}
            />
        </SidebarFooter>
    );
}