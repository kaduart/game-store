import ArticleService from "@/services/Articles";
import Image from "next/image";
import Link from "next/link";

export default async function getHomeLatestArticles() {

    const latestArticles = await ArticleService.getHomeLatestArticles();

    return (
        <div className="container mx-auto my-10">
            <h3 className='text-3xl text-slate-100 underline my-6 p-3'>
                Latest Articles from today...
            </h3>
            <div className="grid grid-cols-4 gap-4 h-[35vh]">
                {
                    latestArticles.data.map((article) => (
                        <Link href={`/articles/${article.slug}`} key={article.title} className="flex-center relative overflow-hidden">
                            <div className="w-full h-full">
                                <Image
                                    src={`/assets/images/articles/${article.image}`}
                                    alt={article.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                                />
                            </div>
                            <p className="absolute bottom-0 pt-6 pb-2 px-2 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent w-full text-slate-100">
                                {article.id}
                                {article.title}
                            </p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
} 