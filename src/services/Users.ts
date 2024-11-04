import { createHash } from "@/helpers/hash";
import UsersDB from "@/libs/database/Users";

const UsersService = {
    signUp: async (data: any) => {

        const passwordHash = await createHash(data.password);

        return UsersDB.create({ ...data, password: passwordHash });
    }
}

export default UsersService;