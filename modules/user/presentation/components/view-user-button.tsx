import Link from "next/link";
import { Button } from "@/shared/presentation/components/ui/button";

const ViewUserButton = ({ id }: { id: string }) => {
    return (
        <Link href={`/users/${id}`}>
            <Button size="sm" variant="secondary">View</Button>
        </Link>
    );
}
 
export default ViewUserButton;