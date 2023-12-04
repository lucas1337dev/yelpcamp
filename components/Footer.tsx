"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"


const Footer = () => {
  const pathname = usePathname()

  return (
    <>
      {pathname !== "/" && (<footer className="mt-auto max-w-[1440px] mx-auto w-full flex items-center px-8 py-10">
        <Image
          src='/assets/logo.svg'
          alt="Logo"
          width={130}
          height={130}
        />
      </footer>)}
    </>
  )
}
export default Footer