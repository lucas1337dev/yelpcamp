import { Button, Textarea } from "@/components"

const page = () => {
    return (
        <section className="max-w-[1440px] mx-auto w-full flex items-center justify-center flex-1 px-8">
            <div className="w-full flex flex-col max-w-[1024px] gap-6">
                <p className="capitalize font-extrabold text-5xl max-md:text-4xl">Add new comment</p>
                <p>Description</p>
                <Textarea 
                    placeholder="This was probably the best camp i've visited this past year, definitely recommend visiting any time soon."
                    rows={10}
                />
                <Button
                    text="Post Comment"
                    background="black"
                />
            </div>
        </section>
    )
}
export default page
