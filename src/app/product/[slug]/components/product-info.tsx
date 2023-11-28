"use client";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useState, useContext } from "react";
import { CartContext } from "@/providers/cart";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const { addProductToCart } = useContext(CartContext);

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleAddCartToProduct = () => {
    addProductToCart({ ...product, quantity });
  };

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">R${product.totalPrice.toFixed(2)}</h1>
        {product.discountPercent > 0 && (
          <DiscountBadge className=" left-3 top-3">
            {product.discountPercent}
          </DiscountBadge>
        )}
      </div>
      {product.discountPercent > 0 && (
        <p className="text-sm line-through opacity-75">
          R${Number(product.basePrice).toFixed(2)}
        </p>
      )}

      <div className="flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={handleDecreaseQuantityClick}
        >
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button
          size="icon"
          variant="outline"
          onClick={handleIncreaseQuantityClick}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>
      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>
      <div className="lg:pt-[33vh] flex flex-col">
        <Button
          className="mt-8 uppercase font-bold"
          onClick={handleAddCartToProduct}
        >
          Adicionar ao carrinho
        </Button>

        <div className="mt-5 flex items-center bg-accent rounded-lg px-5 py-2 justify-between ">
          <div className="flex items-center gap-2">
            <TruckIcon />
            <div>
              <p className="text-xs">
                Entrega via <span className="font-bold">FSPacket</span>
              </p>
              <p className="text-xs text-[#8162FF]">
                Envio para <span className="font-semibold">todo Brasil</span>
              </p>
            </div>
          </div>
          <p className="font-bold text-xs">Frete grátis</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
