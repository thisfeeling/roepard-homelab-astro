import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar"

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
