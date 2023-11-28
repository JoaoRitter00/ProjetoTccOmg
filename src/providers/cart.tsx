"use client"

import { ProductWithTotalPrice } from "@/helpers/product";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";

export interface CartProduct extends ProductWithTotalPrice{//Atualizar para CartItem
    quantity: number;
}

export interface ICartContext{
    products: CartProduct[];//Atualizar para CartItem
    cartTotalPrice: number;
    cartBasePrice: number;
    cartTotalDiscount: number;
    total: number;
    subtotal: number;
    totalDiscount: number;
    addProductToCart: (product: CartProduct)=>void;
    decreaseProductQuantity: (productId: string)=>void; //Atualizar para CartItem
    increaseProductQuantity: (productId: string)=>void; //Atualizar para CartItem
    removeProductFromCart: (productId: string)=>void; //Atualizar para CartItem
}

export const CartContext = createContext<ICartContext>({
    products: [],
    cartBasePrice: 0,
    cartTotalDiscount: 0,
    cartTotalPrice: 0,
    total: 0,
    subtotal: 0,
    totalDiscount: 0,
    addProductToCart: () => {},
    decreaseProductQuantity: () => {},//Atualizar para CartItem
    increaseProductQuantity: () => {}, //Atualizar para CartItem
    removeProductFromCart: () => {}, //Atualizar para CartItem
});

const CartProvider = ({children}: {children: ReactNode})=>{
    const initialProducts = typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem("@fsw-store/cart-products") || "[]")
    : [];

  const [products, setProducts] = useState<CartProduct[]>(initialProducts);

  useEffect(() => {
    // Verifica se está no ambiente do navegador antes de acessar localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem("@fsw-store/cart-products", JSON.stringify(products));
    }
  }, [products]);

    const subtotal = useMemo(()=>{
        return products.reduce((acc, product)=>{
        return acc + Number(product.basePrice) * product.quantity;},0) 
        },[products]); 

        const total = useMemo(()=>{
            return products.reduce((acc, product)=>{
            return acc + product.totalPrice * product.quantity;},0) 
            },[products]); 

    const totalDiscount = total - subtotal;

    const addProductToCart = (product: CartProduct) =>{

    const productIsAlreadyOnCart = products.some( //Atualizar para CartItem
        (cartProduct) => cartProduct.id === product.id,
    );

    if (productIsAlreadyOnCart){  
        setProducts((prev)=>
        prev.map((cartProduct) =>{
            if (cartProduct.id === product.id){
                return{
                    ...cartProduct,
                    quantity: cartProduct.quantity + product.quantity,
                };
            }
            return cartProduct;
        }),
        );
        return;
    }

        setProducts((prev)=> [...prev, product])
    }

    const decreaseProductQuantity = (productId: string) =>{//Atualizar para CartItem
        setProducts(prev => prev.map(cartProduct => {
            if (cartProduct.id === productId){
                return{
                    ...cartProduct,
                    quantity: cartProduct.quantity - 1,
                };
            }
            return cartProduct;
        }).filter((cartProduct)=> cartProduct.quantity>0),
        );
    };

    const increaseProductQuantity = (productId: string) =>{//Atualizar para CartItem
        setProducts(prev => prev.map(cartProduct => {
            if (cartProduct.id === productId){
                return{
                    ...cartProduct,
                    quantity: cartProduct.quantity + 1,
                };
            }
            return cartProduct;
        })
        );
    };

    const removeProductFromCart = (productId: string) =>{//Atualizar para CartItem
        setProducts((prev) => 
            prev.filter((cartProduct) => cartProduct.id !== productId),
        );
    };

    return(
        <CartContext.Provider
        value={{
            products,
            addProductToCart,
            cartBasePrice: 0,
            cartTotalDiscount: 0,
            cartTotalPrice: 0,
            total,
            subtotal,
            totalDiscount,
            decreaseProductQuantity, //Atualizar para CartItem
            increaseProductQuantity, //Atualizar para CartItem
            removeProductFromCart, //Atualizar para CartItem
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider