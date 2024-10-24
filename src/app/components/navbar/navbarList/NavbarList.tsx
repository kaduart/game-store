import { CN } from "@/helpers/Cn";

type NavbarListProps = React.ComponentProps<"ul">;

export const NavbarList = ({ children, className, ...props }: NavbarListProps) => {
    return (
        <ul className={CN("my-4 border-t border-indigo-400/20 hover:border-indigo-400/40", className)} {...props}>
            {children}
        </ul >
    )
}

