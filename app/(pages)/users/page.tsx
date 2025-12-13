'use client'
import UsersTable from "@/modules/user/ui/components/users-table";
import Page from "@/shared/ui/components/layout/page";
import PageHeader from "@/shared/ui/components/layout/page-header";
import { useFindAllUsers } from "@/modules/user/ui/hooks/use-find-all-users.hook";
import AddUserButton from "@/modules/user/ui/components/add-user-button";

const UsersPage = () => {

    const { data: usersData, isLoading, error } = useFindAllUsers()
    
    return (
        <Page>
            <PageHeader title="Users" subTitle="Find your users, stats and more" children={<AddUserButton/>}/>
            {isLoading && <div >Loading...</div>}
            {error && <div>{error.message}</div>}
            {usersData && <UsersTable users={usersData}/>}
        </Page>
    );
}
 
export default UsersPage;