import { Product } from "@prisma/client";
import ProductItem from "@/components/ui/product-item" 
import { computeProductTotalPrice } from "@/helpers/product";

interface ProductListProps {
  products: Product[];
}
const ProductList = ({products}: ProductListProps) => {
  return( <div className="flex w-full gap-4 overflow-x-auto px-5 py-4">{products.map(product =>
    <ProductItem key={product.id} product={computeProductTotalPrice(product)}/>)}</div>);
}

export default ProductList;
