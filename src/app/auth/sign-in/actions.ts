"use server";

import { encrypt } from "@/helpers/jwt";
import { createSession } from "@/helpers/session";
import { getZodErrors } from "@/helpers/zodValidate";
import UsersService from "@/services/Users";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";


export type signInError = {
    email?: string;
    password?: string;
};

export type SignInState = {
    isValid?: boolean;
    errors: signInError

}

const validateSignInForm = (formdata: FormData) => {
    //implementacao de validacao de form com ZOD 

    const userSchema = z.object({
        email: z.string().email('E-mail invalid.'),
        password: z.string().min(8, 'Password must have at least 8 chars.').max(50),
    });

    try {

        userSchema.parse(Object.fromEntries(formdata));
        return { isValid: true, errors: {} };

    } catch (error: unknown) {

        const zodErros = getZodErrors(error);
        return { isValid: false, errors: zodErros || {} };

        // implementacao de validacao sem framework
        /*  const errors: signInError = {
             name: undefined,
             email: undefined,
             password: undefined,
             passwordConfirmation: undefined,
         };
     
         const name = String(formdata.get('name'));
         const email = String(formdata.get('email'));
         const password = String(formdata.get('password'));
         const passwordConfirmation = String(formdata.get('passwordConfirmation'));
     
         try {
             if (!name) {
                 errors.name = "Name is required";
             }
     
             if (!email) {
                 errors.email = "Email is required";
             }
     
             if (!email.includes('@')) {
                 errors.email = "Name is required";
             }
     
             if (password.length < 8) {
                 errors.password = "Password must be at least 8 characters long";
             }
     
             if (passwordConfirmation.length < 8) {
                 errors.passwordConfirmation = "passwordConfirmation must be at least 8 characters long";
             }
     
             if (password && password !== passwordConfirmation) {
                 errors.passwordConfirmation = "Passwords do not match";
             }
     
             const isValid = Object.values(errors).every(valid => valid === undefined);
     
             return { isValid: isValid, errors };
     
         } catch (error) {
             return { isValid: false, errors };
     
         } */
    };
};

export const handleSignInForm = async (prevState: any, formData: FormData) => {

    const validation = validateSignInForm(formData);

    if (!validation.isValid) {
        return { ...prevState, ...validation };
    }

    const data = {
        email: String(formData.get("email")),
        password: String(formData.get("password")),
    }

    const user = await UsersService.signIn(data);
    if (!user) return { isValid: false, error: {} };

    const payload = {
        uuid: user.uuid,
        name: user.name,
        email: user.email,
    }

    const jwt = await encrypt({ payload });

    createSession(jwt);
    revalidatePath('/');

    return redirect('/');
}