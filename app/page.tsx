import Page from "@/shared/presentation/components/layout/page";
import PageHeader from "@/shared/presentation/components/layout/page-header";

export default function Home() {
  return (
    <Page>
      <PageHeader title="Dashboard" subTitle="Find your users, stats and more" children={<div>add children</div>}/>
    </Page>
  );
}