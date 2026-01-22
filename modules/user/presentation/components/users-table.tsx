'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/presentation/components/ui/table";
import { User } from "@/modules/user/domain/user.entity";
import EditUserButton from "@/modules/user/presentation/components/edit-user-button";
import DeleteUserButton from "@/modules/user/presentation/components/remove-user-button"; 
import { useRemoveUser } from "@/modules/user/presentation/hooks/use-remove-user.hook";
import ViewUserButton from "@/modules/user/presentation/components/view-user-button";

const UsersTable = ({ users }: { users: User[] | undefined }) => {
    if (!users) return null;
    const { mutate, isPending } = useRemoveUser()

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>First Name</TableHead>
                        <TableHead>Last Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.firstName}</TableCell>
                            <TableCell>{user.lastName}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell className="flex gap-3">
                                <ViewUserButton id={user.id} />
                                <EditUserButton user={user} />
                                <DeleteUserButton id={user.id} handleClick={(id) => mutate(id)} disabled={isPending} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
 
export default UsersTable;