import { cookies } from "next/headers";
import { decrypt, encrypt } from "./jwt";

const generateExpires = () => new Date(Date.now() + 60 * 1000)
const SESSION_NAME = 'session';

export const createSession = (payload: string) => {
    const expires = generateExpires();

    cookies().set(SESSION_NAME, payload, { expires, httpOnly: true });
}

export const getSession = async () => {
    const session = cookies().get(SESSION_NAME)?.value;
    console.log("🚀 ----> ~ getSession ~ session:", session)
    if (!session) return null;

    return decrypt(session);
}

export const updateSession = async () => {
    const session = await getSession();
    if (!session) return null;
    const expires = generateExpires();

    const jwt = await encrypt({ ...session, expires })

    const updateSession = {
        name: SESSION_NAME,
        value: jwt,
        expires,
        httpOnly: true
    }

    return updateSession;
}