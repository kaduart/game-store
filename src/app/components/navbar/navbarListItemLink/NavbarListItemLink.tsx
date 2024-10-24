import { CN } from "@/helpers/Cn";
import Link from "next/link";
import { NavbarListItem } from "../navbarListItem/NavbarListItem";

type NavbarListItemLinkProps = React.ComponentProps<typeof Link>;

export const NavbarListItemLink = ({ href, children, className, ...props }: NavbarListItemLinkProps) => {
    return (
        <NavbarListItem className={CN("p-0", className)} >
            <Link href={href} className="flex gap-2 items-center w-full p-2 rounded-lg" {...props}>
                {children}
            </Link>
        </NavbarListItem>
    )
}
