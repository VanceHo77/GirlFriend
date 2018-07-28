import { dropdownItem } from "../ui/dropdown-menu/dropdown.class";

export interface Topic {
    name: string;
    link?: string;
    items: dropdownItem[];
}
