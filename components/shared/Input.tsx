import Image from "next/image"

interface InputProps {
  placeholder: string
  icon?: boolean
  border?: boolean
}

const Input = ({ placeholder, icon, border }: InputProps) => {
  return (
    <div className={`flex items-center ${border && 'border-[1px] border-gray-900'} py-4 px-4 rounded-md max-md:w-full`}>
      {icon && <Image
        src="/assets/search-icon.svg"
        alt="Search"
        width={16}
        height={16}
      />}
      <input
        placeholder={placeholder}
        className="outline-none px-3 border-none w-full"
      />
    </div>
  )
}
export default Input