import { Badge } from "@/components/ui/badge";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import ProductItem from "@/components/ui/product-item";
import { CATEGORY_ICON } from "@/constants/category-icon";



const CategoryProducts = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      product: true,
    },
  });
  if (!category) {
    return null;
  }
  return (
    <div className="mx-auto flex flex-col gap-8 p-5">
      <Badge variant="outline"
      className="flex items-center justify-center gap-2 py-3 w-32">
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {category.name}
      </Badge>
      <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-8 lg:gap-24 lg:grid-cols-6 justify-center">
        {category.product.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div></div>
    </div>
  );
};

export default CategoryProducts;
