const GlobalLoading = ({text}: {text: string}) => {
    return ( 
        <div className="w-full container text-center bg-accent-foreground/10 rounded-xl p-4 my-4">
            {text}
        </div> 
    );
}
 
export default GlobalLoading;