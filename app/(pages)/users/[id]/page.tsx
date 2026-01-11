import UserProfile from "@/modules/user/presentation/components/user-profile";
import Page from "@/shared/presentation/components/layout/page";
import PageHeader from "@/shared/presentation/components/layout/page-header";

const UserPage = async ({params}: {params: Promise<{ id: string }>}) => {
    const { id } = await params
    return (
        <Page>
            <PageHeader 
                title="User Details" 
                subTitle="User details" 
                children={null} 
            />
            <UserProfile id={id} />
        </Page>
    );
}
 
export default UserPage;