"use client"
import { User } from "@/modules/user/domain/user.entity";
import Image from "next/image";
import SheetButton from "@/shared/presentation/components/layout/sheet-button";
import EditUserForm from "./edit-user-form";
import { Button } from "@/shared/presentation/components/ui/button";
import { useRemoveUser } from "../hooks/use-remove-user.hook";

const UserCard = ({user}: {user: User}) => {
    const { mutate, isPending } = useRemoveUser()

    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this user?")) {
            mutate(user.id)
        }
    }
    return (
<div className="flex justify-between items-center gap-6 rounded-4xl border border-gray-200 bg-sidebar p-6">
            <div className="flex items-center gap-8">
                <div className="h-64 w-64 relative rounded-3xl overflow-hidden border-2 border-gray-200">
                    <Image 
                        src={user.image}
                        alt={user.firstName}
                        fill
                    />
                </div>
                <div>
                    <h3 className="text-xl font-bold">{user.firstName} {user.lastName}</h3>
                    <p>{user.email}</p>
                    <p><span className="font-bold">Role: </span>{user.role}</p>
                    <p><span className="font-bold">Created: </span>{user.createdAt.toDateString()}</p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <SheetButton
                    button={<Button size="lg">Edit</Button>}
                    title="Edit User Details"
                    children={<EditUserForm user={user} />}
                />
                <Button 
                    onClick={handleDelete} 
                    disabled={isPending}
                    variant="destructive"
                    size="lg"
                >
                    {isPending ? "Deleting..." : "Delete"}
                </Button>
            </div>
        </div>
    );
}
 
export default UserCard;