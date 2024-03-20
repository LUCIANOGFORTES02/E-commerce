import { useState } from "react"
import {CartProduct, cartContext} from "./CartContext"

export default function CartProvider({children}:{children: JSX.Element}) {
  const [products,setProducts] = useState<CartProduct[]>([])//Guardar os produtos

  const addProductToCart=(product:CartProduct)=>{//Adicionar o produto a lista de produtos
    setProducts((prev)=>[...prev,product])//passando uma função que recebe o estado anterior (prev) como parâmetro

  };

  return (
   <div>
    <cartContext.Provider 
    value={{
        products,
        addProductToCart,
        cartTotalPrice: 0,
        cartBasePrice: 0, 
        cartTotalDiscount: 0,
        
    }} >
        {children}
    </cartContext.Provider>
   </div>
  )
}
