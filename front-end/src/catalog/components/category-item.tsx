import { Category } from "@/types/Category"
import { Link } from "react-router-dom"

interface CategoryItemProps{
    category: Category
}

export default function CategoryItem({category}:CategoryItemProps) {
  return (
    <Link to={`/category/${category.slug}`}>
        <div className="flex flex-col">
            <div className="flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg bg-gradient-to-br from-purple-950 to-[rgba(80,51,195,0.2)]">
                <img 
                src={category.imageUrl} 
                alt={category.name}
                height={0}
                width={0}
                sizes='100vw'
                className='h-auto w-auto max-w-[80%] max-h-[70%]'
                style={{
                objectFit: "contain",
                }} />

            </div>
            <div className="rounded-bl-lg rounde-br-lg bg-accent">
                <p className="text-center text-sm font-semibold">{category.name}</p>
            </div>
        </div>
   </Link>
)
}
