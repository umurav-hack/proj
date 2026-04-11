"use client";

import {
  IconBriefcase,
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconList,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";
import { ListIcon } from "lucide-react";
import type * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";

const data = {
  user: {
    name: "constantin",
    email: "m@example.com",
    avatar: "/le.png",
  },
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Jobs",
      url: "#",
      icon: IconBriefcase,
    },
    {
      title: "Applications",
      url: "#",
      icon: IconList,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],

  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <AppSidebarHeader />
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

function AppSidebarHeader() {
  const { state } = useSidebar();
  const isExpanded = state === "expanded";

  return (
    <SidebarHeader className="group/header">
      <SidebarMenu>
        <SidebarMenuItem className="flex items-center justify-between">
          {/* Logo — visible when expanded, or collapsed but not hovered */}
          <SidebarMenuButton
            asChild
            className={cn(
              "w-fit data-[slot=sidebar-menu-button]:p-1.5!",
              !isExpanded && "group-hover/header:hidden",
            )}
          >
            <a href="/">
              <IconInnerShadowTop className="size-5!" />
            </a>
          </SidebarMenuButton>

          {/* Trigger — always visible when expanded, only on hover when collapsed */}
          <SidebarMenuButton
            asChild
            className={cn(
              "w-fit cursor-e-resize text-muted-foreground data-[slot=sidebar-menu-button]:p-1.5!",
              !isExpanded && "hidden group-hover/header:flex",
            )}
          >
            <SidebarTrigger className="text-white" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
