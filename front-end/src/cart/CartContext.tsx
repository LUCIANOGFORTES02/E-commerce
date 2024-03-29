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
    subTotal:number,
    total:number,
    totaldiscount:number,
    addProductToCart:(product: CartProduct) => void;
    decrementQuantity:(productId:string)=>void;
    incrementQuantity:(productId:string)=>void;
    removeProductinCart:(productId:string)=>void;
}
const defaultCartContextValues: CartContextType = {
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0, 
    cartTotalDiscount: 0,
    subTotal:0,
    total:0,
    totaldiscount:0,
    addProductToCart: ()=>{},
    decrementQuantity: ()=>{},
    incrementQuantity:()=>{},
    removeProductinCart:()=>{}


}

export const cartContext = createContext<CartContextType>(defaultCartContextValues)
