"use server";

import UsersService from "@/services/Users";
import { z, ZodError } from "zod";


export type signUpError = {
    name?: string;
    email?: string;
    password?: string;
    passwordConfirmation?: string;
};

export type SignUpState = {
    isValid?: boolean;
    errors: signUpError

}

const getZodErrors = (error: unknown) => {
    const isZodError = error instanceof ZodError;

    if (isZodError) {
        const { fieldErrors } = error.flatten();

        const errors = Object.keys(fieldErrors).reduce((acc, key) => {
            const message = fieldErrors[key]?.at(0);

            return { ...acc, [key]: message };
        }, {});

        return errors;
    }
}

const validateSigUnpForm = (formdata: FormData) => {
    //implementacao de validacao de form com ZOD 

    const checkPasswords = (data: any) => data.password === data.passwordconfirmation;
    const checkPasswordsErrors = {
        message: 'Password confirmation does`t match.',
        path: ['passwordConfirmation']
    };

    const userSchema = z.object({
        name: z.string().min(2, 'Name is invalid').max(50),
        email: z.string().email('E-mail invalid.'),
        password: z.string().min(8, 'Password must have at least 8 chars.').max(50),
        passwordConfirmation: z.string().min(8, 'PasswordConfirmation must have at least 8 chars.').max(50)
    })
        .refine(checkPasswords, checkPasswordsErrors);

    try {

        userSchema.parse(Object.fromEntries(formdata));
        return { isValid: true, errors: {} };

    } catch (error: unknown) {

        const zodErros = getZodErrors(error);
        return { isValid: false, errors: zodErros || {} };

        // implementacao de validacao sem framework
        /*  const errors: signUpError = {
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

export const handleSignUpForm = async (prevState: any, formData: FormData) => {

    const validation = validateSigUnpForm(formData);

    if (!validation.isValid) {
        return { ...prevState, ...validation };
    }

    const data = {
        name: String(formData.get("name")),
        email: String(formData.get("email")),
        password: String(formData.get("password")),
    }

    const record = await UsersService.signUp(data);
    console.log("🚀 ----> ~ handleSignUpForm ~ record:", record)

    return { isValid: true, errors: {} };
}