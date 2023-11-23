import { prismaClient } from "@/lib/prisma";
import CategoriesItem from "./category-item";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-2 p-8">
      {categories.map((category) => (
        <CategoriesItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Categories;