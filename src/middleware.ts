import { NextResponse } from "next/server";
import { updateSession } from "./helpers/session";

export default async function middleware() {
    const updatedSession = await updateSession();

    if (!updatedSession) return null;

    const res = NextResponse.next();
    res.cookies.set(updatedSession);

    return res;
}