"use client"

import { CommentCard } from "@/components"
import { campgrounds, comments } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

const page = () => {
    const params = useParams()
    // @ts-ignore
    const campground = campgrounds.find((campground) => campground.id === parseInt(params.id))!

    return (
        <article className="max-w-[1440px] w-full px-8 mx-auto py-20">
            <div className="flex max-lg:flex-col-reverse max-lg:gap-20">
                <div className="flex-[0.5] flex max-md:items-center max-md:justify-center">
                    <Image
                        src="/assets/map.png"
                        alt="Map"
                        width={300}
                        height={300}
                        className="object-contain w-[400px] h-[500px] border-[1px] border-black/10 rounded-sm p-10"
                    />
                </div>
                <div className="flex-[0.5] flex flex-col gap-5">
                    <div className="flex flex-col gap-5 border-[1px] border-black/10 rounded-sm p-10">
                        <Image
                            src={campground?.hdImage}
                            alt="Image"
                            width={500}
                            height={500}
                            className="object-contain rounded-md w-full"
                        />
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between">
                                <p className="font-extrabold text-xl">
                                    {campground?.name}
                                </p>
                                <p className="font-semibold max-md:text-sm">
                                    ${campground.price}/night
                                </p>
                            </div>
                            <p className="text-gray-600 font-medium max-md:text-sm">
                                {campground?.fullDescription}
                            </p>
                            <p className="text-gray-600 font-medium italic max-md:text-sm">
                                Submitted by Andrew Mike
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 border-[1px] border-black/10 rounded-sm p-10">
                        {comments.map((comment, i) => (
                            <CommentCard
                                key={i}
                                name={comment.name}
                                date={comment.date}
                                comment={comment.comment}
                            />
                        ))}
                        <div>
                            <Link
                                href="/new/comment"
                                className="text-white bg-black rounded-md px-6 py-4 hover:bg-gray-900 font-extrabold transition-all max-md:flex text-center inline-flex gap-2 items-center"
                            >
                                <Image
                                    src="/assets/chat-bubble.svg"
                                    alt="Chat"
                                    width={24}
                                    height={24}
                                />
                                Leave a Review
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
export default page
