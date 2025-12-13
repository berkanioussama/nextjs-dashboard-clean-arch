import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/shared/ui/components/ui/sidebar"
import { type LucideIcon } from "lucide-react"

const NavPages = ({pages}: {pages: {name: string, url: string, icon: LucideIcon}[]}) => {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Pages</SidebarGroupLabel>
            <SidebarMenu>
                {pages.map((page)=>(
                    <SidebarMenuItem key={page.name}>
                        <SidebarMenuButton asChild>
                        <a href={page.url}>
                            <page.icon />
                            <span>{page.name}</span>
                        </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
 
export default NavPages;