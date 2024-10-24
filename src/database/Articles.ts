import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const MIN_OFFSET = 0;
const MAX_RECORDS = 50;

const Article = {
    get: async ({ where = {}, orderBy = {}, limit = 10, offset = 0 }) => {

        const take = Math.min(limit, MAX_RECORDS);
        const skip = Math.max(offset, MIN_OFFSET);

        const records = await prisma.article.findMany({
            where,
            orderBy,
            take,
            skip,
        });
        console.log("🚀 ----> ~ get all: ~ records:", records)

        return records;
    },
    count: async ({ where = {} }) => {

        const count = await prisma.article.count({
            where,
        });
        console.log("🚀 ----> ~ count: ~ count:", count)

        return count;

    }
}

export default Article;