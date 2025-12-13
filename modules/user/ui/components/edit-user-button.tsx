import { Button } from "@/shared/ui/components/ui/button";
import { User } from "@/modules/user/domain/user.entity";
import EditUserForm from "@/modules/user/ui/components/edit-user-form";
import SheetButton from "@/shared/ui/components/layout/sheet-button";

const EditUserButton = ({user}: {user: User}) => {
    return (
        <SheetButton
            button={<Button size="sm">Edit</Button>}
            title="Edit User Details"
            children={<EditUserForm user={user} />}
        />
    );
}
 
export default EditUserButton;