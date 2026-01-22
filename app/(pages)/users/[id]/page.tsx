import UserProfileContainer from "@/modules/user/presentation/components/user-profile-container";
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
            <UserProfileContainer id={id} />
        </Page>
    );
}
 
export default UserPage;