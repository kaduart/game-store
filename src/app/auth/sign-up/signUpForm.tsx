"use client";

import SubmitButton from "@/app/components/form/submitButton/submitButton";
import TextInput from "@/app/components/form/textInput/textInput";
import { useFormState } from "react-dom";
import { handleSignUpForm, SignUpState } from "./actions";

const initialState: SignUpState = {
    isValid: undefined,
    errors: {
        name: undefined,
        email: undefined,
        password: undefined,
        passwordConfirmation: undefined
    }
}
export default function SignUpForm() {

    const [state, formAction] = useFormState(handleSignUpForm, initialState);
    console.log("🚀 ----> ~ SignUpForm ~ state:", state)

    return (
        <form className="mt-8" action={formAction}>

            <TextInput type="text" name="name" label="name" placeholder="Name" error={state.errors.name} />
            <TextInput type="email" name="email" label="Email" placeholder="Email" error={state.errors.email} />
            <TextInput type="password" name="password" label="Password" placeholder="Password" error={state.errors.password} />
            <TextInput type="password" name="passwordConfirmation" label=" Password Confirmation" placeholder="Password Confirmation" error={state.errors.passwordConfirmation} />

            <SubmitButton label="Create account" />

        </form>
    )
}