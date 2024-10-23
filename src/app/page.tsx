
import articles from '@/app/data/articles.json';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="ml-72">
      <div className="w-full h-[35vh] bg-orange-400 flex-center">
        <p>
          Welcome to Next.js!
        </p>
      </div>
      <div className="container mx-auto my-6">
        <div className="grid grid-cols-4 gap-4 h-[35vh]">
          {
            articles.splice(-4).map((article) => (
              <div key={article.title} className="flex-center relative overflow-hidden">
                <div className="w-full h-full">
                  <Image
                    src={`/assets/images/articles/${article.image}`}
                    alt={article.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition duration-500 hover:scale-105 rounded-r-lg"
                  />
                </div>
                <p className="absolute bottom-0 pt-6 pb-2 px-2 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent w-full">
                  {article.title}
                </p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="container mx-auto my-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8 flex flex-col gap-4">
            {
              articles.map((article) => (
                <div key={article.title} className="flex bg-slate-800 rounded-md">
                  <div className="flex items-center">
                    <div className=" rounded-r-lg overflow-hidden">
                      <Image
                        src={`/assets/images/articles/${article.image}`}
                        alt={article.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition duration-500 hover:scale-105 rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2 pl-4 m-4">
                    <h2 className="text-3xl mb-4 text-indigo-400/60">{article.title}</h2>
                    <p className="flex-grow">{article.content}</p>
                    <button className='bg-slate-700 hover:bg-indigo-400/40 rounded-lg px-4 inline max-w-max'>Read more</button>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="col-span-4 bg-indigo-500 rounded-md">B</div>
        </div>
      </div>
    </div>
  );
}
