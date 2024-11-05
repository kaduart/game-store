import { CN } from "@/helpers/Cn";

//tipa para pegar as propriedade do tipo de campo do formualrio
export type TextInputProps = React.ComponentProps<'input'> & {
    label?: string | null;
    name?: string | null;
    type?: string | null;
    placeholder?: string | null;
    value?: string | null;
    error?: string | null;
};

export default function TextInput({ label, name, type, placeholder, value, className, error, ...props }: TextInputProps) {

    return (
        <div className={CN("my-4", className)}>
            {label ? <label className="text-slate-300 my-2">{label}</label> : null}

            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                className={CN("w-full my-1 rounded-md border-2 border-transparent bg-slate-800 px-4 py-4 text-base text-slate-200 focus:outline-none focus:ring-0",
                    {
                        'border-red-500': !!error,
                        'border-green-500': !error,
                        'focus:border-blue-500': error === null
                    }
                )}

                {...props}
            />

            {
                error ? (
                    <div>
                        <small className="text-sm  text-red-500">
                            {error}
                        </small>
                    </div>
                )
                    : null
            }

        </div>
    )
}