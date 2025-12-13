import { Button } from "@/shared/ui/components/ui/button";
import AddUserForm from "@/modules/user/ui/components/add-user-form";
import SheetButton from "../../../../shared/ui/components/layout/sheet-button";

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