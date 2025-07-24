export interface NavigationLink {
  href: string;
  name: string;
}

export interface NavigationItem extends NavigationLink {
  children: Array<NavigationLink>
}