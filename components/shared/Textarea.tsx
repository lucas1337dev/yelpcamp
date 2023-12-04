const Textarea = ({ rows, placeholder }: { rows: number, placeholder: string }) => {
    return (
        <textarea
            rows={rows}
            placeholder={placeholder}
            className="p-6 rounded-md outline-none w-full"
        />
    )
}
export default Textarea
