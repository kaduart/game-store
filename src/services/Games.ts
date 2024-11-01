import Games from "@/libs/database/Games";

const GamesService = {
    getAllGames: async (page = 1, limit = 10) => {
        const offset = (page - 1) * limit;
        const data = await Games.get({ offset, limit });
        const total = await Games.count({});
        const totalPages = Math.ceil(total / limit);

        return {
            data,
            metadata: {
                page,
                limit,
                offset,
                total,
                totalPages
            }
        };
    },

    getRandonGames: async (limit = 10) => {

        const total = await Games.count({});
        const offset = Math.max(0, Math.floor(Math.random() * total) - limit);

        const data = await Games.get({ limit, offset })
        const sorted = await data.sort(() => {
            return Math.random() > 0.5 ? 1 : -1;
        });

        const totalPages = Math.ceil(total / limit);

        return {
            data: sorted,
            metadata: {
                page: 1,
                limit,
                offset,
                total,
                totalPages
            }
        };
    },

    getGameBySlug: async (slug: string) => {
        return Games.getOne({ where: { slug } });

    }
}

export default GamesService;