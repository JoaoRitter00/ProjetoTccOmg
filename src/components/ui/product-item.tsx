import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon} from "lucide-react";
import { Badge } from "./badge";
import Image from "next/image";
import Link from "next/link"
import DiscountBadge from "./discount-badge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}
const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex flex-col max-w-[156px] gap-4">
        <div className="relative flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageURLs[0]}
            width={0}
            height={0}
            className="h-auto max-h-[70%] w-full max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
            sizes="100vw"
            alt={product.name}
          />
          {product.discountPercent > 0 && (
            <DiscountBadge className="absolute left-3 top-3">
            {product.discountPercent}
        </DiscountBadge>
          )}
        </div>
        <div className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">
          <p>{product.name}</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          {product.discountPercent > 0 ? (
            <>
              <p className="text-sm font-semibold">
                {product.totalPrice.toFixed(2)}
              </p>
              <p className="text-xs opacity-75 line-through opacity-75">
                R$ {Number(product.basePrice.toFixed(2))}
              </p>
            </>
          ) : (
            <p className="text-xs opacity-75 line-through opacity-75">
              R$ {Number(product.basePrice.toFixed(2))}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
