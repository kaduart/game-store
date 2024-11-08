import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const UsersDB = {

    create: async (data: Pick<User, 'name' | 'email' | 'password'>) => {
        return prisma.user.create({ data });
    },

    findByEmail: async (email: string) => {
        return await prisma.user.findUnique({ where: { email } });
    }
}

export default UsersDB;