"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const pathname = usePathname()

    return (
        <>
            {pathname === "/sign-in" || pathname === "/sign-up" ? (
                <header className="py-10 px-8">
                    <nav className="max-w-[1440px] mx-auto w-full flex justify-between items-center">
                        <div className="w-full flex items-center gap-20 max-sm:justify-between">
                            <Link href="/">
                                <Image
                                    src="/assets/logo.svg"
                                    alt="Logo"
                                    width={130}
                                    height={130}
                                />
                            </Link>
                            <Link
                                href="/home"
                                className="text-lg text-gray-600 max-sm:text-3xl hover:text-black transition-all font-medium"
                            >
                                ←{" "}
                                <span className="max-sm:hidden">
                                    Back to campgrounds
                                </span>
                            </Link>
                        </div>
                    </nav>
                </header>
            ) : pathname === "/" ? (
                <></>
            ) : (
                <>
                    <header className="py-10 px-8">
                        <nav className="max-w-[1440px] mx-auto w-full flex justify-between items-center">
                            <div className="flex items-center gap-8">
                                <Link href="/">
                                    <Image
                                        src="/assets/logo.svg"
                                        alt="Logo"
                                        width={130}
                                        height={130}
                                    />
                                </Link>
                                <Link
                                    href="/home"
                                    className="font-bold text-gray-600 hover:text-black transition-all max-md:hidden"
                                >
                                    Home
                                </Link>
                            </div>
                            <div className="flex items-center gap-6 max-md:hidden">
                                <Link
                                    href="/sign-in"
                                    className="text-gray-600 hover:text-black font-bold  transition-all"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/sign-up"
                                    className="text-white bg-black rounded-md px-6 py-4 hover:bg-gray-900 font-bold  transition-all"
                                >
                                    Create an Account
                                </Link>
                            </div>
                            <div className="hidden max-md:flex relative">
                                <Image
                                    src={
                                        isActive
                                            ? "/assets/close.svg"
                                            : "/assets/hamburger-menu.svg"
                                    }
                                    alt="Icon"
                                    width={24}
                                    height={24}
                                    onClick={() => setIsActive((prev) => !prev)}
                                />
                                {isActive && (
                                    <div className="absolute flex flex-col -left-6 top-10 items-end gap-2">
                                        <Link
                                            href="#"
                                            className="font-semibold text-gray-600 hover:text-black transition-all"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            href="#"
                                            className="truncate font-semibold text-gray-600 hover:text-black transition-all"
                                        >
                                            Sign-up
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </nav>
                    </header>
                </>
            )}
        </>
    )
}
export default Navbar
