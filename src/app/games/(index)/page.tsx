import { getGameImage } from "@/helpers/games";
import GamesService from "@/services/Games";
import Image from "next/image";
import { Pagination } from "../../components/navbar/pagination/pagination";
import { PageWrapper } from "../../components/pageWrapper/pageWapper";

export default async function Games({ searchParams }: { searchParams?: { page?: string, limit?: string } }) {
    const currentPage = Number(searchParams?.page) || 1;
    const limit = Number(searchParams?.page) || 10;

    const games = await GamesService.getAllGames(currentPage, limit);
    return (
        <PageWrapper>
            <div className="container mx-auto my-6 m-">
                <h1 className="text-3xl text-slate-100 my-6">Games</h1>
                <div className="grid grid-cols-4 gap-x-4 gap-y-12">

                    {
                        games.data.map((game) => {
                            return (
                                <div key={game.id} className="flex-center flex-col relative overflow-hidden">
                                    <div className="w-full h-full">
                                        <Image
                                            src={getGameImage(game.image)}
                                            alt={game.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-full object-cover transition duration-500 hover:scale-105"
                                        />
                                    </div>
                                    <p className="pt-6 pb-2 px-2 w-full text-slate-100">
                                        {game.title}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="my-8">
                    <Pagination currentPage={games.metadata.page} totalPages={games.metadata.totalPages} />
                </div>

            </div >
        </PageWrapper >
    )
}