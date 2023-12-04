interface CommentCardProps {
    name: string
    date: string
comment: string
}

const CommentCard = ({ name,
    date,
    comment }: CommentCardProps) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between">
                <p className="font-bold text-lg">{name}</p>
                <p className="text-gray-600">{date} ago</p>
            </div>
            <p className="text-gray-600">{comment}</p>
            <hr className="border-0 border-t-[1px] border-t-black/10 h-[1px]" />
        </div>
    )
}
export default CommentCard
