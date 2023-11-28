import Link from "next/link";
import Image from "next/image"
import {Category} from "@prisma/client"

interface CategoryItemProps{
    category: Category;
}

const CategoryItem = ({category}: CategoryItemProps) => {
    return ( <Link className="lg:w-[400px]" href={`/category/${category.slug}`}>
        <div className="flex flex-col">
            <div className="flex h-[150px] lg:h-[200px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg bg-category-item-gradient">
                <Image src={category.imageURL}
                alt={category.name}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
                />
            </div>
            <div className="rounded-bl-lg rounded-br-lg bg-accent py-4">
                <p className="text-center text-sm font-semibold">{category.name}</p>
            </div>
        </div>
    </Link> );
}
 
export default CategoryItem;