const GlobalError = ({text}: {text: string}) => {
    return ( 
        <div className="w-full container text-center bg-destructive/10 rounded-xl p-4 my-4">
            {text}
        </div>
    );
}
 
export default GlobalError;