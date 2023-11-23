import { Category } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icon";
import  Link from "next/link";


interface CategoryItemProps {
  category: Category
}

const CategoriesItem = ({ category }: CategoryItemProps) => {
  
  return (
    <Link href={`/category/${category.slug}`}>
      <Badge
        variant="outline"
        className="flex items-center justify-center py-3 rounded-lg gap-2"
      >
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="text-bold text-xs">{category.name}</span>
      </Badge>
   </Link>
  );
};

export default CategoriesItem;
