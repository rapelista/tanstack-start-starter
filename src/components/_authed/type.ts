import { LucideIcon } from 'lucide-react';

export type NavMainBaseItem = {
  title: string;
  url: string;
};

export type NavMainItem = {
  title: string;
  icon: LucideIcon;
  defaultOpened: boolean;
  items: NavMainBaseItem[];
};
