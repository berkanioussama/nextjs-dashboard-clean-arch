import { Button } from "@/shared/presentation/components/ui/button";
import AddUserForm from "@/modules/user/presentation/components/add-user-form";
import SheetButton from "@/shared/presentation/components/layout/sheet-button";

const AddUserButton = () => {
    return (
        <SheetButton
            button={<Button size="lg">Add User</Button>}
            title="Fill User Details"
            children={<AddUserForm />}
        />
    );
}
 
export default AddUserButton;