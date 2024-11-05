import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./helpers/session";

export default async function middleware(request: NextRequest) {
    const updatedSession = await updateSession();

    if (!updatedSession) return null;

    const res = NextResponse.next();
    res.cookies.set(updatedSession);

    return res;
}