import { campgrounds } from "@/constants"
import { CampCard } from "."

const Camps = () => {
  return (
    <section className="max-w-[1440px] mx-auto py-20 px-8">
        <div className="flex flex-wrap gap-20 justify-between max-2xl:justify-center">
          {campgrounds.map((campground) => (
            <CampCard
              key={campground.id}
              id={campground.id}
              image={campground.image}
              name={campground.name}
              description={campground.description}
            />
          ))}
        </div>
    </section>
  )
}
export default Camps