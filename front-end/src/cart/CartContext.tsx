import { ProductWithTotalPrice } from "@/helpers/product";
import { createContext } from "react";

export interface CartProduct extends ProductWithTotalPrice{
    quantity: number;
}


export type CartContextType = {
    products: CartProduct[];
    cartTotalPrice: number;
    cartBasePrice:number;
    cartTotalDiscount:number;
    addProductToCart:(product: CartProduct) => void;
    decrementQuantity:(productId:string)=>void;
    incrementQuantity:(productId:string)=>void
}
const defaultCartContextValues: CartContextType = {
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0, 
    cartTotalDiscount: 0,
    addProductToCart: ()=>{},
    decrementQuantity: ()=>{},
    incrementQuantity:()=>{}


}

export const cartContext = createContext<CartContextType>(defaultCartContextValues)
