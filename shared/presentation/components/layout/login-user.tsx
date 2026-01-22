"use client";
import { useFindUserByProviderId } from "@/modules/user/presentation/hooks/use-find-user-by-provider-id.hook";
import { SidebarFooter } from "@/shared/presentation/components/ui/sidebar";
import { NavUser } from "@/shared/presentation/components/layout/nav-user";
import { useUser } from "@clerk/nextjs";

const LoginUser = () => {
    const { user } = useUser();
    if (!user) return null;

    return (
        <SidebarFooter>
            <UserProvider providerId={user?.id} />
        </SidebarFooter>
    );
}

export default LoginUser;

const UserProvider = ({ providerId }: { providerId: string }) => {
    const {data: user, isLoading, error} = useFindUserByProviderId( providerId )

    if (isLoading) return <div className="p-2">Loading...</div>;
    if (error) return <div className="p-2 text-destructive">Error: {(error as Error).message}</div>;
    if (!user) return <div className="p-2">User not found</div>;

    return (
        <NavUser 
            name= {user.firstName + " " + user.lastName} 
            email= {user.email} 
            avatar={user.image}
        />
    )
}