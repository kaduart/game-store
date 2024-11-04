"use client";

import SubmitButton from "@/app/components/form/submitButton/submitButton";
import TextInput from "@/app/components/form/textInput/textInput";
import { useFormState } from "react-dom";
import { handleSignUpForm } from "./actions";

export default function SignUpForm() {

    const [state, formAction] = useFormState(handleSignUpForm, {});
    console.log("🚀 ----> ~ SignUpForm() ~ classSignUpForm ~ state:", state)

    return (
        <form className="mt-8" action={formAction}>

            <TextInput type="text" name="name" label="name" placeholder="Name" />
            <TextInput type="email" name="email" label="Email" placeholder="Email" />
            <TextInput type="password" name="password" label="Password" placeholder="Password" />
            <TextInput type="password" name="passwordConfirmation" label=" Password Confirmation" placeholder="Password Confirmation" />

            <SubmitButton label="Create account" />

        </form>
    )
}