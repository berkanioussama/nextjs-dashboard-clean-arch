import Page from "@/shared/presentation/components/layout/page";
import PageHeader from "@/shared/presentation/components/layout/page-header";

const QuotesPage = () => {
    return (
        <Page>
            <PageHeader 
                title="Quotes" 
                subTitle="Manage your quotes" 
                children={null} 
            />
        </Page>
    );
}
 
export default QuotesPage;