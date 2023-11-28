import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import CategoryItem from "./components/category-item";

const CatalogPage = async () => {
    const categories = await prismaClient.category.findMany({})
    return ( 
        <div className="flex flex-col gap-8 p-5">
            <Badge variant={"outline"}
            className="flex items-center justify-center gap-2 py-3 mr-56 lg:w-32">
                <ShapesIcon size={16}/> Catálogo
            </Badge>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:px-64">
                {categories.map((category)=>(
                <CategoryItem key={category.id} category={category}/>
                ))}
            </div>
        </div>
     );
}
 
export default CatalogPage;