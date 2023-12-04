import { Button, Input, Textarea } from "@/components"

const page = () => {
    return (
        <section className="max-w-[1440px] mx-auto w-full flex items-center justify-center flex-1 px-8">
            <div className="w-full flex flex-col max-w-[1024px] gap-3">
                <p className="capitalize font-extrabold text-5xl max-md:text-4xl mb-2">
                    Add new campground
                </p>
                <div>
                    <p>Campground Name</p>
                    <Input placeholder="Seven Sisters Waterfall" />
                </div>
                <div>
                    <p>Price</p>
                    <Input placeholder="$149" />
                </div>
                <div>
                    <p>Image</p>
                    <Input placeholder="www.thepinoytraveler.com/2018/01/mt-ulap-diy-dayhike.html" />
                </div>
                <div>
                    <p>Description</p>
                    <Textarea placeholder="The Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterfall consists of seven seaparate streams, and the tallest of the seven has a free fall that measures 250 metres. The waterfall is located along the Geirangerfjorden in Stranda Municipality in MØre og Romsdal county, Norway." rows={5} />
                </div>
                <Button text="Add Campground" background="black" />
            </div>
        </section>
    )
}
export default page
