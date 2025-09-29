'use client';

import { Link } from '@tanstack/react-router';
import { Command, Users2 } from 'lucide-react';
import * as React from 'react';

import { NavMain } from '~/components/_authed/nav-main';
import { NavUser } from '~/components/_authed/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/components/ui/sidebar';

import { NavOrganization } from './nav-organization';
import { NavMainItem } from './type';

const navMain: NavMainItem[] = [
  {
    title: 'Users',
    icon: Users2,
    defaultOpened: true,
    items: [
      {
        title: 'All Users',
        url: '/users',
      },
      {
        title: 'Import & Export',
        url: '/users/bulk',
      },
      {
        title: 'Groups/Teams',
        url: '/users/teams',
      },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg">
              <Link to="/dashboard">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>

                <NavOrganization />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
