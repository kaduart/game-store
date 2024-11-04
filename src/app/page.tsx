
import { HomeLatestArticles, HomeLatestArticlesSkeleton } from '@/sections/homeLatestArticles';
import ArticleService from '@/services/Articles';
import GamesService from '@/services/Games';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { Hero } from './components/hero/hero';
import { Pagination } from './components/navbar/pagination/pagination';
import { PageWrapper } from './components/pageWrapper/pageWapper';

export default async function Home({ searchParams }: { searchParams?: { page?: string, limit?: string } }) {
  const currentPage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.page) || 12;

  const articles = await ArticleService.getHomeArticles(currentPage, limit);

  const heroGames = await GamesService.getRandonGames(40);

  return (

    <PageWrapper>

      <div className="container mx-auto my-10 h-[42vh] flex-center justify-center ">

        <Hero games={heroGames.data} />

      </div>

      <Suspense fallback={<HomeLatestArticlesSkeleton />}>
        <HomeLatestArticles />
      </Suspense>

      <div className="container mx-auto my-10">
        <h3 className='text-3xl text-slate-100 underline my-6 p-3'>
          Articles
        </h3>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <div className="flex flex-col gap-4">

              {
                articles.data.map((article) => (
                  <div key={article.id} className="flex bg-slate-800 rounded-md">
                    <div className="flex items-center">
                      <div className=" rounded-r-lg overflow-hidden">
                        <Image
                          src={`/assets/images/articles/${article.image}`}
                          alt={article.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover transition duration-500 hover:scale-105 rounded-lg "
                        />
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-2 pl-4 m-4">

                      <h2 className="text-3xl mb-4 text-indigo-400/60">{article.title}</h2>

                      <p className="flex-grow text-slate-100">{article.publishedAt.toISOString()}</p>
                      <p className="flex-grow text-slate-100">{article.content}</p>

                      <Link href={`/articles/${article.slug}`} className='bg-slate-700 hover:bg-indigo-400/40 rounded-lg px-4 inline max-w-max'>
                        Read more
                      </Link>

                    </div>
                  </div>
                ))
              }

              <div className="my-8">
                <Pagination currentPage={articles.metadata.page} totalPages={articles.metadata.totalPages} />
              </div>

            </div>
            <div className="col-span-4 bg-indigo-500 rounded-md">B</div>
          </div>
        </div>
      </div>

    </PageWrapper>

  );
}
