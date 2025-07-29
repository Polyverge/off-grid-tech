import { NavigationItem } from "../model/navigation";

export const findActivePath = (pathname: string, steps: NavigationItem[]) => {
    const matchParentPath = /\/config\/[house|boat|rv]*/g;
    const parentPath = pathname.match(matchParentPath)?.[0] || '';
    return steps[steps.findIndex(({ href }) => href === parentPath)]?.children;
}