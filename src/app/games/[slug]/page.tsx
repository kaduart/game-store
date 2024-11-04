import { PageWrapper } from "@/app/components/pageWrapper/pageWapper";
import { getGameImage } from "@/helpers/games";
import GamesService from "@/services/Games";
import Image from "next/image";

export default async function GameDetailsPage({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const game = await GamesService.getGameBySlug(slug)

    return (
        game &&
        <PageWrapper>
            <div className="container mx-auto my-6 text-slate-100 pl-5">
                <div className="w-2/3">
                    <h1 className="">Game Details Page</h1>
                    <h1 className="text-3xl my-6 ">{game.title}</h1>

                    <Image
                        src={getGameImage(game.image)}
                        alt={game.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    />

                    <div className="flex flex-col my-6">
                        <p className="my-2 p-2 bg-slate-700 roudend">
                            {
                                game.year
                            }
                        </p>
                        <p>
                            {
                                game.plataform
                            }
                        </p>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}