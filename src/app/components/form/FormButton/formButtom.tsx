import { CN } from "@/helpers/Cn";

export type FormButtonProps = React.ComponentProps<'button'> & {
    label?: string | null,
    action: () => void;
}
export default function FormButton({ label, action, children, className, ...props }: FormButtonProps) {

    return (
        <form action={action} className="flex gap-2 items-center rounded-lg " >
            <button
                type="submit"
                className={CN('block', className)}
                {...props}>
                {
                    label || children
                }

            </button>
        </form>
    )
}