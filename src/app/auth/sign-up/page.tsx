import { PageWrapper } from "@/app/components/pageWrapper/pageWapper";
import Link from "next/link";
import SignUpForm from "./signUpForm";

export default function SignUpPage() {

    return (
        <PageWrapper>
            <div className="flex-center w-full min-h-screen text-slate-100">
                <div className="w-1/3 mx-auto border border-slate-800 rounded-lg p-8">
                    <h1 className="text-3xl text-center ">Create your account</h1>

                    <SignUpForm />

                    <div className="mt-8">
                        <Link href={"/auth/sign-up"} >Already have an account? Sign in</Link>
                    </div>
                </div>

            </div>
        </PageWrapper>
    )
}