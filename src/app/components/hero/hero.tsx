import { getGameImage } from "@/helpers/games";
import Image from "next/image";
import Link from "next/link";
import logoNitendo64 from '../../../../public/assets/images/Nintendo-64-Logo.png';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ScrollableGameList = ({ games }: { games: any[] }) => {
    return <>
        {
            games.map(game => (
                <Link href={`/games/${game.slug}`} key={game.id} className="h-32 w-auto">
                    <Image
                        className="h-full w-full object-cover brightness-75 hover:brightness-100"
                        src={getGameImage(game.image)}
                        alt={game.title}
                        width={372}
                        height={272}
                    />
                </Link>
            ))

        }
    </>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Hero = ({ games }: { games: any[] }) => {
    //forma de fazer css aplicado no tsx
    /*    const style = {
           '--duration': '180s',
           ' --item-size': ' 128px',
           '--item-count': '10',
       } as React.CSSProperties; */

    return (
        <>
            <div className="flex-center flex-col ml-auto w-auto h-full p-2">
                <Image
                    src={logoNitendo64} alt="Nitendo 64"
                    width={160}
                    height={150}
                />
                <h2 className="text-slate-100 text-2xl my-2 justify-center">
                    The Best Nitendo 64 fan website
                </h2>
            </div>
            <div className="ml-auto w-auto h-full border border-slate-700 p-2 rounded-lg">
                <div className="flex h-full overflow-hidden gap-2">
                    <div className="scroll-ttb flex flex-col gap-2">
                        <ScrollableGameList games={games.slice(0, 10)} />
                        <ScrollableGameList games={games.slice(0, 10)} />
                    </div>
                    <div className="scroll-btt flex flex-col gap-2">
                        <ScrollableGameList games={games.slice(10, 20)} />
                        <ScrollableGameList games={games.slice(10, 20)} />
                    </div>
                    <div className="scroll-ttb flex flex-col gap-2">
                        <ScrollableGameList games={games.slice(20, 30)} />
                        <ScrollableGameList games={games.slice(20, 30)} />
                    </div>
                    <div className="scroll-btt flex flex-col gap-2">
                        <ScrollableGameList games={games.slice(30, 40)} />
                        <ScrollableGameList games={games.slice(30, 40)} />
                    </div>
                </div>
            </div>
        </>
    )
}