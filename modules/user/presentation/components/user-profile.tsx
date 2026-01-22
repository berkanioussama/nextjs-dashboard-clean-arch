import { Profile } from "@/modules/user/domain/user.entity";
import UserCard from "./user-card";
import Quotes from "@/modules/quote/presentation/components/quotes";

const UserProfile = ({profile}: {profile: Profile}) => {
    
    return (
        <div className="flex flex-col gap-6">
            <UserCard user={profile.user} />
            <Quotes quotes={profile.quotes} />
        </div>
    );
}

export default UserProfile