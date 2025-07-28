import { AreaChart, MapPin, SearchIcon } from "lucide-react";
import { NavigationItem } from "../model/navigation";

const houseBasepath = '/config/house'
const boatBasepath = '/config/boat'
const rvBasepath = '/config/rv'

export const steps: NavigationItem[] = [
  { href: '/config', name: 'Get started', children: [] },
  {
    href: '/config/house', name: 'House', children: [
      { href: `${houseBasepath}/location`, name: 'Location', Icon: MapPin },
      { href: `${houseBasepath}/area`, name: 'Area', Icon: AreaChart },
      { href: `${houseBasepath}/product`, name: 'Product', Icon: SearchIcon }
    ]
  },
  { href: '/config/boat', name: 'Boat', children: [{ href: `${boatBasepath}/style`, name: 'style' }] },
  { href: '/config/rv', name: 'Rv, Van or mobile home', children: [{ href: `${rvBasepath}/style`, name: 'style' }] },
  ];