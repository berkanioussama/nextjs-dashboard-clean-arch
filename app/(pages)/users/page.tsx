'use client'
import UsersTable from "@/modules/user/presentation/components/users-table";
import Page from "@/shared/presentation/components/layout/page";
import PageHeader from "@/shared/presentation/components/layout/page-header";
import { useFindAllUsers } from "@/modules/user/presentation/hooks/use-find-all-users.hook";
import AddUserButton from "@/modules/user/presentation/components/add-user-button";
import GlobalLoading from "@/shared/presentation/components/layout/global-loading";

const UsersPage = () => {

    const { data: usersData, isLoading, error } = useFindAllUsers()
    
    return (
        <Page>
            <PageHeader title="Users" subTitle="Find your users, stats and more" children={<AddUserButton/>}/>
            {isLoading && <GlobalLoading text="Loading users..." />}
            {error && <GlobalLoading text="Error loading users..." />}
            {usersData && <UsersTable users={usersData}/>}
        </Page>
    );
}
 
export default UsersPage;