import Image from "next/image"
import Link from "next/link"

interface CampCardProps {
    id: number
    image: string
    name: string
    description: string
}

const CampCard = ({ id, image, name, description }: CampCardProps) => {
    return (
        <div className="max-w-[400px] flex flex-col gap-3">
            <Image
                src={image}
                alt={name}
                width={200}
                height={200}
                className="object-cover w-full h-[240px] rounded-md"
            />
            <div className="px-2">
                <p className="font-bold text-lg">{name}</p>
                <p className="text-gray-600 font-medium max-w-[400px] max-sm:text-sm">{description}</p>
            </div>
            <Link href={`/campground/${id}`} className="text-black hover:text-gray-600 font-extrabold text-lg text-center transition-all max-sm:text-base">View Campground</Link>
        </div>
    )
}
export default CampCard
