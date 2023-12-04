import { Button, Input } from "@/components"
import Image from "next/image"
import Link from "next/link"

const page = () => {
    return (
        <section className="max-w-[1440px] mx-auto w-full flex items-center justify-center flex-1 px-8">
            <div className="w-full flex justify-between max-lg:justify-center gap-20">
                <div className="max-w-1/2 max-lg:max-w-full flex flex-col gap-5">
                    <p className="font-extrabold text-4xl mb-2 w-3/4 max-lg:w-full max-sm:text-center">
                        Start exploring camps from all around the world
                    </p>
                    <div>
                        <p>Username</p>
                        <Input placeholder="johndoe_91" />
                    </div>
                    <div>
                        <p>Password</p>
                        <Input placeholder="Enter your password" />
                    </div>
                    <Button
                        text="Login"
                        background="black"
                    />
                    <p>Already a user? <Link href='/sign-in' className="underline font-bold text-blue-400 hover:text-blue-800 transition-all">Sign in</Link></p>
                </div>
                <div className="flex flex-col gap-6 self-center max-w-[300px] max-lg:hidden">
                    <p className="font-extrabold text-2xl">“YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added.”</p>
                    <div className="flex items-center gap-3">
                        <Image
                            src="/assets/user-testimonial.svg"
                            alt="User"
                            width={50}
                            height={50}
                        />
                        <div className="flex flex-col">
                            <p className="font-extrabold text-lg">May Andrews</p>
                            <p className="text-amber-950">Professional Hiker</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default page