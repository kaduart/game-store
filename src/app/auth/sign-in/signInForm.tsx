"use client";

import SubmitButton from "@/app/components/form/submitButton/submitButton";
import TextInput from "@/app/components/form/textInput/textInput";
import { useFormState } from "react-dom";
import { handleSignInForm, SignInState } from "./actions";

const initialState: SignInState = {
    isValid: undefined,
    errors: {
        email: undefined,
        password: undefined,
    }
}
export default function SignInForm() {

    const [state, formAction] = useFormState(handleSignInForm, initialState);

    return (
        <form className="mt-8" action={formAction}>

            <TextInput type="email" name="email" label="Email" placeholder="Email" error={state.errors.email} />
            <TextInput type="password" name="password" label="Password" placeholder="Password" error={state.errors.password} />

            <SubmitButton label="Login your account" />

        </form>
    )
}