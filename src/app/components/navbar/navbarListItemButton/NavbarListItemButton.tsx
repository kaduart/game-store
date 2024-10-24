"use client";

import { CN } from "@/helpers/Cn";
import { NavbarListItem } from "../navbarListItem/NavbarListItem";

type NavbarListItemButtonProps = React.ComponentProps<"button">;

export const NavbarListItemButton = ({ children, className, ...props }: NavbarListItemButtonProps) => {
    return (
        <NavbarListItem className={CN("p-0", className)} >
            <button
                onClick={() => alert("Clicked")}
                className="flex gap-2 items-center w-full p-2 rounded-lg" {...props}>
                {children}
            </button>
        </NavbarListItem>
    )
}
