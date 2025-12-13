const Page = ({children}: React.PropsWithChildren) => {
    return (
        <div className="w-full p-6">
            {children}
        </div>
    );
}
 
export default Page;    