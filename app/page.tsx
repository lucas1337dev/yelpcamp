import { Button } from "@/components"
import { brands, items } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

const page = () => {
    return (
        <section className="max-h-screen max-lg:min-h-screen">
            <div className="flex min-h-screen max-lg:flex-col-reverse">
                <div className="flex-1 flex flex-col px-20 py-10 max-lg:py-0 max-md:px-10">
                    <Link href="/" className="w-[130px] max-lg:hidden">
                        <Image
                            src="/assets/logo.svg"
                            alt="Logo"
                            width={130}
                            height={130}
                            className="object-contain"
                        />
                    </Link>
                    <div className="flex flex-col gap-5 flex-1 justify-center max-md:pb-10">
                        <div className="max-w-[70%] max-xl:max-w-full flex flex-col gap-2">
                            <p className="text-5xl font-extrabold max-sm:text-4xl">
                                Explore the best camps on Earth
                            </p>
                            <p className="text-amber-950">
                                YelpCamp is a curated list of the best camping
                                spots on Earth. Unfiltered and unbiased reviews.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            {items.map((item, i) => (
                                <div className="flex items-center gap-2">
                                    <Image
                                        key={i}
                                        src="/assets/checkmark.svg"
                                        alt="Checkmark"
                                        width={24}
                                        height={24}
                                    />
                                    <p className="text-amber-950">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="my-5 max-md:mb-0 max-md:w-full">
                            <Link
                                href="/home"
                                className="text-white bg-black rounded-md px-6 py-4 hover:bg-gray-900 font-extrabold transition-all w-full max-md:inline-block text-center"
                            >
                                View Campgrounds
                            </Link>
                        </div>
                        <div className="flex flex-col gap-2 flex-wrap max-lg:pb-3 max-md:hidden">
                            <p className="text-amber-950">Partnered with:</p>
                            <div className="flex gap-5">
                                {brands.map((brand, i) => (
                                    <Image
                                        key={i}
                                        src={brand}
                                        alt="Brand"
                                        width={130}
                                        height={50}
                                        className="object-contain h-[50px]"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:flex-1 w-full bg-home-image bg-center bg-no-repeat bg-cover max-lg:h-[400px] max-lg:mb-10" />
                <Link
                    href="/"
                    className="hidden max-lg:flex px-20 py-10 max-md:px-10"
                >
                    <Image
                        src="/assets/logo.svg"
                        alt="Logo"
                        width={130}
                        height={130}
                        className="object-contain"
                    />
                </Link>
            </div>
        </section>
    )
}
export default page
