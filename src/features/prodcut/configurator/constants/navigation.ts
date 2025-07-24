import { NavigationItem } from "../model/navigation";

const houseBasepath = '/config/house'
const boatBasepath = '/config/boat'
const rvBasepath = '/config/rv'

export const steps: NavigationItem[] = [
  { href: '/config', name: 'Get started', children: [] },
  { href: '/config/house', name: 'House', children: [{ href: `${houseBasepath}/location`, name: 'Location' }] },
  { href: '/config/boat', name: 'Boat', children: [{ href: `${boatBasepath}/style`, name: 'style' }] },
  { href: '/config/rv', name: 'Rv, Van or mobile home', children: [{ href: `${rvBasepath}/style`, name: 'style' }] },
  ];