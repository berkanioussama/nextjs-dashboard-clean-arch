import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/shared/presentation/components/ui/sheet";

interface Props {
    button: React.ReactNode;
    title: string;
    children: React.ReactNode;
}
const SheetButton = ({button, title, children}: Props) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                {button}
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>{title}</SheetTitle>
                </SheetHeader>
                <div className="px-6">
                    {children}
                </div>
            </SheetContent>
        </Sheet>
    );
}
 
export default SheetButton;