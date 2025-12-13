'use client'

import { Button } from "@/shared/ui/components/ui/button";

const DeleteUserButton = ({id, handleClick, disabled}: {id: string, handleClick: (id: string) => void, disabled: boolean}) => {

    return (
        <Button size="sm" variant="destructive" disabled={disabled}
            onClick={() => handleClick(id)}
        >
            Delete
        </Button>
    );
}
 
export default DeleteUserButton;