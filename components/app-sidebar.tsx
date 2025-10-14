"use client"

import * as React from "react"
import {
  IconChartBar,
  IconDashboard,
  IconFileUpload,
  IconListDetails,
  IconReportAnalytics,
  IconSettings,
  IconCalendarTime,
  IconHelp,
  IconSearch,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    { title: "Beranda", url: "/dashboard", icon: IconDashboard },
    { title: "Meeting", url: "/dashboard/meeting", icon: IconCalendarTime },
    { title: "Uploads", url: "/dashboard/uploads", icon: IconFileUpload },
    { title: "Status Meeting", url: "/dashboard/status-meeting", icon: IconListDetails },
    { title: "Analytics", url: "/dashboard/analytics", icon: IconReportAnalytics },
    { title: "Kanban", url: "/dashboard/kanban", icon: IconListDetails },
  ],
  navClouds: [],
  navSecondary: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    // {
    //   title: "Search",
    //   url: "#",
    //   icon: IconSearch,
    // },
  ],
  documents: [
      {
        name: "Settings",
        url: "/dashboard/settings",
        // icon: IconSettings,
      },
      {
        name: "Get Help",
        url: "#",
        // icon: IconHelp,
      },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#" className="flex items-center gap-2">
                <img src={"/logo.png"} alt="logo" width={25} height={25} />
                <span className="text-base font-semibold">Notu.ai</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
