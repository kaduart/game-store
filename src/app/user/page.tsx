import { getSession } from "@/helpers/session";
import type { User } from "@prisma/client";
import { redirect } from "next/navigation";
import { PageWrapper } from "../components";

export default async function User() {
    const userDTO = await getSession() as User | null;

    if (userDTO) {
        // ... rest of the code
    } else {
        redirect("/auth/sign-in");
    }

    if (!userDTO) redirect("/auth/sign-in");

    return (

        <PageWrapper>
            <div className="container mx-auto my-6 text-slate-100 pl-5">
                <div className="w-2/3">
                    <h1 className="">Account</h1>

                    <div className="flex flex-col my-6">
                        {userDTO.payload.name ? <p className="my-2 p-2"> {String(userDTO.payload.name)}</p> : null}
                        {userDTO.payload.email ? <p className="my-2 p-2"> {String(userDTO.payload.email)}</p> : null}

                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}