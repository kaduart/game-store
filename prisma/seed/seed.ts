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
import articles from '../../src/data/articles.json';
import { slugfy } from '../../src/helpers/slugfy';

const prisma = new PrismaClient();
const isDev = process.env.NODE_ENV === 'development';

async function main() {
    await seedArticles();
}

async function seedArticles() {
    //save guard
    if (!isDev) {
        throw new Error("NODE_ENV is not a development environment.")
    }

    await prisma.article.deleteMany();
    ///no prisma nao tem o truncate para zera os ID necessario roda o ocmando abaixo, comando exclusiso do sqlite cada BD tem o seu
    await prisma.$executeRawUnsafe("DELETE FROM SQLITE_SEQUENCE WHERE name=$1;", "Article");

    try {
        await Promise.all(
            articles.map(async (article) => {
                console.log('article', article)
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