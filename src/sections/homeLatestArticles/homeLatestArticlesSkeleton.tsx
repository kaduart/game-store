import { getIntArray } from "@/helpers/math";

export default async function getHomeLatestArticles() {

    const placeholders = getIntArray(0, 3);
    console.log("🚀 ----> ~ getHomeLatestArticles ~ placeholders:", placeholders)

    return (
        <div className="container mx-auto my-10 animate-pulse">
            <h3 className='text-3xl w-3/12 text-slate-100 underline my-6 p-3'>
                <div className="bg-slate-600 x-1/6 h-9 rounded-lg" />
            </h3>
            <div className="grid grid-cols-4 gap-4 h-[35vh] my-6 p-3">
                {
                    placeholders.map((v) => (
                        <div key={v} className="flex-center relative overflow-hidden">
                            <div className="w-full h-full bg-slate-600">

                            </div>
                            <p className="absolute bottom-0 pt-6 pb-2 px-2 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent w-full text-slate-100">
                                <span className="bg-slate-600 w-full h-4 rounded-lg block" />

                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
} 