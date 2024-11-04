import { getIntArray } from "@/helpers/math";
import { PageWrapper } from "../../components/pageWrapper/pageWapper";

export default function GamesLoading() {
    const placeholders = getIntArray(1, 12);

    return (
        <PageWrapper>
            <div className="container mx-auto my-6 text-slate-100">
                <div className="text-3xl my-6">Loading...
                    <span className="bg-slate-600 x-1/6 h-9 rounded-lg" />
                </div>
                <div className="container mx-auto my-6 bg-slate-600 x-1/6 h-9 rounded-lg">
                    <div className="text-3xl text-slate-100 my-6">
                        <span className="bg-slate-600 x-1/6 h-9 rounded-lg" />
                    </div>
                    <div className="grid grid-cols-4 gap-x-4 gap-y-12">

                        {
                            placeholders.map((v) => {
                                return (
                                    <div key={v} className="flex-center flex-col relative overflow-hidden w-[372] h-[312px]">
                                        <div className="w-full h-full bg-slate-600 " />
                                        <div className="pt-6 pb-2 px-2 w-full text-slate-100">
                                            <span className="bg-slate-600 w-full x-1/6 h-6 rounded-lg"></span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="my-8">
                        <span className="bg-slate-600 x-1/6 h-10 rounded-lg" />
                    </div>

                </div >
            </div>
        </PageWrapper >
    )
}