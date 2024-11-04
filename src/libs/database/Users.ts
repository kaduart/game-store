import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const UsersDB = {
    create: async (data: any) => {
        return prisma.users.create({ data });
    }
}

export default UsersDB;