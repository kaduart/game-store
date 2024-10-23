/* 
    aquivo para fazer o db-seed, faz um arquivo JSON e joga para dentro do BD
    para rodar esse BD , inserir no package.json -> 
    "prisma": {
        "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed/seed.ts"
    }
        instala o ts-node -> "yarn add ts-node"
        instala o ts-node -> "yarn add @prisma/client"
        roda o comando "npx prisma db seed" para criar
*/

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

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