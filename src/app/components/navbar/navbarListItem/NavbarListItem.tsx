import { CN } from "@/helpers/Cn";

type NavbarListItem = React.ComponentProps<"li">;

export const NavbarListItem = ({ children, className, ...props }: NavbarListItem) => {
    return (
        <li className={CN("my-2 flex gap-2 items-center rounded-lg bg-transparent hover:bg-indigo-400/40 cursor-pointer p-2", className)} {...props}>
            {children}
        </li>
    )
}
