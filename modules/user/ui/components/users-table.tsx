'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/components/ui/table";
import { User } from "@/modules/user/domain/user.entity";
import EditUserButton from "@/modules/user/ui/components/edit-user-button";
import DeleteUserButton from "@/modules/user/ui/components/remove-user-button";
import { useRemoveUser } from "@/modules/user/ui/hooks/use-remove-user.hook";

const UsersTable = ({ users }: { users: User[] }) => {

    const { mutate, isPending } = useRemoveUser()

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell className="flex gap-3">
                                <EditUserButton user={user} />
                                <DeleteUserButton id={user.id} handleClick={(userId) => mutate({userId})} disabled={isPending} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
 
export default UsersTable;