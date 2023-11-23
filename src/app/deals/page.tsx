import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { PercentIcon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const DealsPage = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  });
  return (
    <div>
      <div className="flex flex gap-8 p-5 justify-between">
        <Badge
          variant="outline"
          className="flex items-center justify-center gap-2 py-3"
        >
          <PercentIcon size={16} />
          Ofertas
        </Badge>
        <div className="flex w-full max-w-sm space-x-2">
          <Input type="email" placeholder="Pesquisar" />
          <Button type="submit">
            <Search size={16} />
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-16 lg:grid-cols-6 lg:py-4 ">
          {deals.map((product) => (
            <ProductItem
              key={product.id}
              product={computeProductTotalPrice(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsPage;
