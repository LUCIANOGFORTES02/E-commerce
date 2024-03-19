import { Product } from "@/types/Product"
import { createContext } from "react";

interface CartProduct extends Product{
    quantity: number;
}


export type CartContextType = {
    products: CartProduct[];
    cartTotalPrice: number;
    cartBasePrice:number;
    cartTotalDiscount:number;
}
const defaultCartContextValues: CartContextType = {
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0, 
    cartTotalDiscount: 0,
}

export const cartContext = createContext<CartContextType>(defaultCartContextValues)
