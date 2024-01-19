export interface NavItem {
    displayName: string;
    iconName?: string;
    route?: string;
    children?: NavItem[];
    isOpen?: boolean;
    heading?: string;
    additionalItems?: NavItem[];
    additionalHeading?: string;
}