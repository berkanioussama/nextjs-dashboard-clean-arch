const PageHeader = ({title, subTitle, children}: {title: string, subTitle: string, children: React.ReactNode}) => {
    return (
        <div className="w-full flex items-center justify-between">
            <div className="flex flex-col gap-1">
                <h2 className="font-semibold text-3xl">{title}</h2>
                <p className="text-sm text-muted-foreground">{subTitle}</p>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}
 
export default PageHeader;