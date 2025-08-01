export interface NavigationLink {
  href: string;
  name: string;
  Icon?: any
}

export interface NavigationItem extends NavigationLink {
  children: Array<NavigationLink>
}