"use server"

import { logout } from "@/helpers/session";
import { redirect } from "next/navigation";

export const handleSingOutForm = async () => {
    console.log("🚀 ----> ~ handleSingOutForm ~ handleSingOutForm:")

    logout();

    return redirect('/auth/sign-in');
}
