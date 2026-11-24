import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"

import Image from "next/image"

export function AppSidebar() {
  return (
    <Sidebar>
        <SidebarHeader className="flex flex-row gap-2.5 items-center px-4 py-4">
            <Image src={"/logo.svg"} alt='logo' width={40} height={40}/>
            <h2 className="font-semibold text-lg text-slate-900">Djo Ai</h2>
        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}