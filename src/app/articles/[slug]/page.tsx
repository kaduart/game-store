import { PageWrapper } from "@/app/components/pageWrapper/pageWapper";
import { getArticleImage } from "@/helpers/article";
import ArticleService from "@/services/Articles";
import Image from "next/image";

type ArticleDetailsProps = { params: { slug: string } };

export default async function ArticleDetailsPage({ params }: ArticleDetailsProps) {
    const slug = params.slug;
    const article = await ArticleService.getArticlesBySlug(slug)

    return (
        article &&
        <PageWrapper>
            <div className="container mx-auto my-6 text-slate-100 pl-5">
                <div className="w-2/3">
                    <h1 className="">Article Details Page</h1>
                    <h1 className="text-3xl my-6 ">{article.title}</h1>

                    <Image
                        src={getArticleImage(article.image)}
                        alt={article.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    />

                    <div className="flex flex-col my-6">
                        <p className="my-2 p-2 bg-slate-700 roudend">
                            {article.excerpt}
                        </p>
                        <p>
                            {article.content}
                        </p>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}