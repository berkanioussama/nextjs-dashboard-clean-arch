"use client"

import GlobalLoading from "@/shared/presentation/components/layout/global-loading";
import { useFindProfileById } from "@/modules/user/presentation/hooks/use-find-profile-by-id.hook";
import GlobalError from "@/shared/presentation/components/layout/global-error"
import UserProfile from "@/modules/user/presentation/components/user-profile";

const UserProfileContainer = ({id}: {id: string}) => {
    const {data: profile, isLoading, error} =  useFindProfileById(id);
    
    if (isLoading) return <GlobalLoading text="Loading user..." />;
    if (error) return <GlobalError text={error.message} />;
    if (!profile) return <GlobalError text="User not found" />;
    
    return (
        <div>
            <UserProfile profile={profile} />
        </div>
    );
}
 
export default UserProfileContainer;