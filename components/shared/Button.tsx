interface ButtonProps {
    text: string
    background: "black" | "transparent"
}

const Button = ({ text, background }: ButtonProps) => {
    return (
        <button
            className={`${
                background === "black"
                    ? "text-white bg-black rounded-md px-6 py-4 hover:bg-gray-900"
                    : "text-gray-600 hover:text-black"
            } transition-all outline-none border-none cursor-pointer font-bold flex items-center justify-center max-sm:w-full`}
        >
            {text}
        </button>
    )
}
export default Button
