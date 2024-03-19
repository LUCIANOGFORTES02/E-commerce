import {cartContext} from "./CartContext"

export default function CartProvider({children}:{children: JSX.Element}) {
  return (
   <div>
    <cartContext.Provider 
    value={{
        products: [],
        cartTotalPrice: 0,
        cartBasePrice: 0, 
        cartTotalDiscount: 0,
    }} >
        {children}
    </cartContext.Provider>
   </div>
  )
}
