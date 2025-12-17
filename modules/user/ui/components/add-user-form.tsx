'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/ui/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/shared/ui/components/ui/input";
import { Button } from "@/shared/ui/components/ui/button";
import { useAddUser } from "@/modules/user/ui/hooks/use-add-user.hook";
import { NewUser, addUserSchema } from "@/modules/user/domain/user.entity";
import { toast } from "sonner"

const AddUserForm = () => {
    const { mutate: addUser, isPending } = useAddUser();

    const form = useForm<NewUser>({
        resolver: zodResolver(addUserSchema),
        defaultValues: {
            name: "",
            providerId: "",
            email: "",
            image: "",
        },
    })

    function onSubmit(values: NewUser) {
        addUser(values, {
            onSuccess: (data) => {
                toast.success("User has been created", {
                    description: `User ${data.name} has been created successfully`,
                })
                form.reset();
            },
            onError: (error) => {
                toast.error("Failed to create user", {
                    description: error.message || "Please try again later."
                });
            }
        });
    }

    const inputs: { field: keyof NewUser; name: string; placeHolder: string; type: string }[] = [
        { field: 'name', name: 'Name', placeHolder: 'Your full name', type: 'text' },
        { field: 'providerId', name: 'Auth Provider ID', placeHolder: 'Your auth provider ID', type: 'text' },
        { field: 'email', name: 'Email', placeHolder: 'Your email', type: 'email' },
        { field: 'image', name: 'Image URL', placeHolder: 'Your image URL', type: 'text' }
    ]

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {inputs.map((input) => (
                    <FormField key={input.field} control={form.control} name={input.field} render={({ field }) => (
                        <FormItem>
                            <FormLabel>{input.name}</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder={input.placeHolder} type={input.type} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}/>
                ))}

                <Button type="submit">{isPending ? 'Creating...' : 'Create User'}</Button>
            </form>
        </Form>
    );
}
 
export default AddUserForm;