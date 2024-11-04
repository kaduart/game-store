export type SubmitButtonProps = React.ComponentProps<'button'> & {
    label?: string | null | undefined;
}
export default function SubmitButton({ label, children, ...props }: SubmitButtonProps) {

    return (
        <button type="submit" className="bg-slate-700 hover:bg-indigo-400/40 rounded-lg px-4 py-3 inline max-w-max"
            {...props}>
            {
                label || children
            }

        </button>
    )
}