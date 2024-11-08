import { handleSingOutForm } from "@/app/auth/sign-out/action";
import { CN } from "@/helpers/Cn";
import Image from "next/image";
import myLogo from "../../../../public/assets/images/minha-logo.png";
import FormButton from "../form/formButton/formButtom";
import { ExitIcon, GameIcon, HomeIcon, PrizeIcon, RouteIcon, UserIcon } from "../icons/Icons";
import { NavbarList } from "./navbarList/NavbarList";
import { NavbarListItem } from "./navbarListItem/NavbarListItem";
import { NavbarListItemButton } from "./navbarListItemButton/NavbarListItemButton";
import { NavbarListItemLink } from "./navbarListItemLink/NavbarListItemLink";

type NavbarProps = React.ComponentProps<"nav"> & {
    user?: any;
};

export default function Navbar({ className, user, ...props }: NavbarProps) {

    return (
        <nav className={CN(
            'fixed top-0 left-0 flex flex-col h-screen bg-slate-900 border-r border-indigo-400/60 hover:border-indigo-400/80 w-72 p-2 text-slate-300',
            className)}
            {...props}
        >
            <div className="">
                <Image
                    //exemplo de link de imagem configurando tb o next.config para funcionar
                    // src="https://www.emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png"

                    src={myLogo} alt="Logo Ricardo Maia Dev"
                    className=" bg-cover"
                    width={300}
                    height={22}
                />
            </div>
            <NavbarList className={"flex-grow"}>
                <NavbarListItemLink href="/">
                    <HomeIcon className="group-hover:text-indigo-500 w-4 h-4" />
                    Home
                </NavbarListItemLink>
                <NavbarListItemLink href="/games">
                    <GameIcon className="group-hover:text-indigo-500 w-4 h-4" />
                    Games
                </NavbarListItemLink>
                <NavbarListItemLink href="/top-10">
                    <PrizeIcon className="group-hover:text-indigo-500 w-4 h-4" />
                    Top 10
                </NavbarListItemLink>
                <NavbarListItemLink href="/walkthroughs">
                    <RouteIcon className="group-hover:text-indigo-500 w-4 h-4" />
                    Walkthroughs
                </NavbarListItemLink>
                <NavbarListItemButton>
                    <RouteIcon className="group-hover:text-indigo-500 w-4 h-4" />
                    teste button
                </NavbarListItemButton>
            </NavbarList>

            {
                user ? (
                    <NavbarList >
                        <NavbarListItemLink href="/user">
                            <UserIcon className="w-4 h-4" />{user.payload.name}
                        </NavbarListItemLink>
                        <NavbarListItem>
                            <ExitIcon className="w-4 h-4" />
                            <FormButton action={handleSingOutForm} > Log out</FormButton>
                        </NavbarListItem>
                    </NavbarList>
                )
                    : (
                        <NavbarList >
                            <NavbarListItemLink href="/auth/sign-in">
                                <UserIcon className="w-4 h-4" />Login

                            </NavbarListItemLink>
                        </NavbarList>
                    )
            }

        </nav >
    )
}