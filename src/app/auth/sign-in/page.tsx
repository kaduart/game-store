import { PageWrapper } from "@/app/components/pageWrapper/pageWapper";
import Link from "next/link";
import SignInForm from "./signInForm";

export default function SignInPage() {

    return (
        <PageWrapper>
            <div className="flex-center w-full min-h-screen text-slate-100">
                <div className="w-1/3 mx-auto border border-slate-800 rounded-lg p-8">
                    <h1 className="text-3xl text-center ">Login into your account</h1>

                    <SignInForm />

                    <div className="mt-8">
                        <Link href={"/auth/sign-up"} >Don't have an account? Sign up</Link>
                    </div>
                </div>

            </div>
        </PageWrapper>
    )
}