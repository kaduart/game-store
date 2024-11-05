import { getSession } from "@/helpers/session";
import { redirect } from "next/navigation";
import { PageWrapper } from "../components";

export default async function User() {
    const user = await getSession();
    console.log("🚀 ssssssssss---zzzzzzzzzzzzzzzz-> ~ User ~ user:", user)

    if (!user) redirect("/auth/sign-in");

    return (

        <PageWrapper>
            <div className="container mx-auto my-6 text-slate-100 pl-5">
                <div className="w-2/3">
                    <h1 className="">Account</h1>

                    <div className="flex flex-col my-6">
                        {user.payload.name ? <p className="my-2 p-2"> {String(user.payload.name)}</p> : null}
                        {user.payload.email ? <p className="my-2 p-2"> {String(user.payload.email)}</p> : null}

                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}