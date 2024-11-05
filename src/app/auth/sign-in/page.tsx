import { PageWrapper } from "@/app/components/pageWrapper/pageWapper";
import SignInForm from "./signInForm";

export default function SignInPage() {

    return (
        <PageWrapper>
            <div className="flex-center w-full min-h-screen">
                <div className="w-1/3 mx-auto border border-slate-800 rounded-lg p-8">
                    <h1 className="text-3xl text-center text-slate-100">Login into your account</h1>

                    <SignInForm />

                </div>

            </div>
        </PageWrapper>
    )
}