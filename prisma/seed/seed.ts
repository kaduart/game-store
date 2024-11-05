/* 
    aquivo para fazer o db-seed, faz um arquivo JSON e joga para dentro do BD
    para rodar esse BD , inserir no package.json -> 
    "prisma": {
        "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/seed.ts"
    }
        instala o ts-node -> "yarn add ts-node"
        instala o ts-node -> "yarn add @prisma/client"
        roda o comando "npx prisma db seed" para criar
        roda "npx prisma studio mostra local host o BD criado"
        instala "yarn add url-slug" 
        cria um helpers 'slugfy
*/

import { PrismaClient } from "@prisma/client";
import articlesJson from '../../src/data/articles.json';
import GamesJson from '../../src/data/games.json';
import { slugfy } from '../../src/helpers/slugfy';

const prisma = new PrismaClient();
const isDev = process.env.NODE_ENV === 'development';

async function main() {
    if (!isDev) {
        throw new Error("NODE_ENV is not a development environment.")
    }

    const [, , ...args] = process.argv;
    const truncate = !!args.find(arg => arg === '-truncate');
    const articles = !!args.find(arg => arg === 'articles');
    const games = !!args.find(arg => arg === 'games');
    /*  await seedArticles();
     await seedGamesAndGenres(); */

    if (truncate) {
        if (articles) await truncateArticles();
        if (games) await truncateGames();
    }

    if (articles) await seedArticles();
    if (games) await seedGames();
}

///no prisma nao tem o truncate para zera os ID necessario roda o ocmando abaixo, comando exclusiso do sqlite cada BD tem o seu
async function truncateArticles() {
    await prisma.article.deleteMany();
    await prisma.$executeRawUnsafe("DELETE FROM SQLITE_SEQUENCE WHERE name=$1;", "Article");
}

async function truncateGames() {
    await prisma.gameGenre.deleteMany();
    await prisma.games.deleteMany();
    await prisma.genres.deleteMany();
    await prisma.$executeRawUnsafe("DELETE FROM SQLITE_SEQUENCE WHERE name=$1;", "GameGenre");
    await prisma.$executeRawUnsafe("DELETE FROM SQLITE_SEQUENCE WHERE name=$1;", "Games");
    await prisma.$executeRawUnsafe("DELETE FROM SQLITE_SEQUENCE WHERE name=$1;", "Genres");
}

async function seedGames() {

    await Promise.all(
        GamesJson.map(async (game) => {

            const genres = game.genre.map((title) => {
                const slug = slugfy(title)
                return {
                    genre: {
                        connectOrCreate: {
                            where: { slug },
                            create: { title, slug }
                        }
                    },
                }
            })

            await prisma.games.create({
                data: {
                    title: game.title,
                    slug: game.slug,
                    year: game.year,
                    image: game.fileName,
                    link: game.link ?? '#',
                    plataform: 'Nitendo 64',
                    genres: {
                        create: genres
                    }
                }
            });
        })

    );

}

async function seedArticles() {
    //save guard


    try {
        await Promise.all(
            articlesJson.map(async (article) => {

                await prisma.article.create({
                    data: {
                        slug: slugfy(article.title),
                        title: article.title,
                        excerpt: article.excerpt,
                        image: article.image,
                        content: article.content,
                        publishedAt: new Date(article.publish_date),
                    },
                });
            }),
        );
    } catch (error) {
        console.error("Error seeding articles:", error);
    } finally {
        console.log("Articles seeded successfully");
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });