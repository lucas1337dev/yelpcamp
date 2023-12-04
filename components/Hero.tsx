import Link from "next/link"
import { Button, Input } from "."

const Hero = () => {
    return (
        <section className="max-w-[1440px] mx-auto py-20 px-8">
            <div className="w-full flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h1 className="font-extrabold text-5xl max-md:text-center max-sm:text-4xl">Welcome to YelpCamp!</h1>
                    <p className="text-red-950 text-base max-w-[400px] max-md:max-w-full max-md:text-center">View our hand-picked campgrounds from all over the world, or add your own.</p>
                </div>
                <div className="flex items-center max-md:justify-center gap-3 max-sm:flex-col">
                    <Input 
                        placeholder="Search for camps"
                        icon
                        border
                    />
                    <Button
                        text="Search"
                        background="black"
                    />
                </div>
                <div className="w-full flex max-md:justify-center">
                    <Link href="/new/campground" className="text-base text-red-950 font-normal underline max-md:text-center">Or add your own campground</Link>
                </div>
            </div>
            
        </section>
    )
}
export default Hero
