import Article from "@/database/Articles";

const HOME_LATEST_COUNT = 4;

const ArticleService = {
    getAllArticles: async (page = 1, limit = 10) => {
        const offset = (page - 1) * limit;
        const data = await Article.get({ offset, limit });
        const totalPages = await Article.count({});

        return {
            data,
            metadata: {
                page,
                limit,
                offset,
                totalPages
            }
        };
    },
    getHomeArticles: async (page = 1, limit = 10) => {
        const offset = (page - 1) * limit + HOME_LATEST_COUNT;
        const orderBy = { publishedAt: "desc" };
        const data = await Article.get({ offset, orderBy, limit });
        const totalPages = await Article.count({});

        return {
            data,
            metadata: {
                page,
                limit,
                offset,
                totalPages
            }
        };
    },
    getHomeLatestArticles: async () => {
        const page = 1;
        const limit = HOME_LATEST_COUNT;
        const offset = 0;
        const orderBy = { publishedAt: "desc" };
        const data = await Article.get({ offset, orderBy, limit });
        const totalPages = await Article.count({});

        return {
            data,
            metadata: {
                page,
                limit,
                offset,
                totalPages
            }
        };
    },
}

export default ArticleService;