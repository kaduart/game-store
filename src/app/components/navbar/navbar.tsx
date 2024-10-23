import { HomeIcon } from "@/app/assets/icons/Icons";
import { GameIcon } from "@/app/assets/icons/icons/icons/GameIcon";
import { PrizeIcon } from "@/app/assets/icons/icons/icons/PrizeIcon";
import { RouteIcon } from "@/app/assets/icons/icons/icons/RouteIcon";
import { UserIcon } from "@/app/assets/icons/icons/icons/UserIcon";
import { CN } from "@/app/helpers/Cn";
import Image from "next/image";
import myLogo from "../../assets/images/minha-logo.png";
import { NavbarList } from "./navbarList/NavbarList";
import { NavbarListItemButton } from "./navbarListItemButton/NavbarListItemButton";
import { NavbarListItemLink } from "./navbarListItemLink/NavbarListItemLink";

type NavbarProps = React.ComponentProps<"nav">;

export default function Navbar({ className, ...props }: NavbarProps) {

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
            <NavbarList >
                <NavbarListItemLink href="/user">
                    <UserIcon className="group-hover:text-indigo-500 w-4 h-4" />
                    User
                </NavbarListItemLink>
            </NavbarList>
        </nav >
    )
}