import { useEffect, useMemo, useState } from "react"
import {CartProduct, cartContext} from "./CartContext"

export default function CartProvider({children}:{children: JSX.Element}) {
  const [products,setProducts] = useState<CartProduct[]>(
    JSON.parse(localStorage.getItem("AplicacaoTeste")||"[]")

  )//Guardar os produtos

  useEffect(()=>{
    localStorage.setItem("AplicacaoTeste",JSON.stringify(products))

  },[products])

  const subTotal = useMemo(()=>{//Evitar cálculos caros em cada renderização
    return products.reduce((acc,product)=> {
      return acc +(Number(product.basePrice) * product.quantity )
    },0);

  },[products])

  const total = useMemo(()=>{//Evitar cálculos caros em cada renderização
    return products.reduce((acc,product)=> {
      return acc +(Number(product.totalPrice) * product.quantity )
    },0);

  },[products])

  const totaldiscount = subTotal - total;



  const decrementQuantity=(productId:string)=>{
    setProducts((prev)=>prev.map((cartProduct)=>{
      if(cartProduct.id === productId){
        return{
          ...cartProduct,
          quantity:cartProduct.quantity - 1,
        }
      }
      return cartProduct

    }).filter((prev)=>(prev.quantity>0)))

  }
  const incrementQuantity=(productId:string)=>{
    setProducts((prev)=>prev.map((cartProduct)=>{
      if(cartProduct.id === productId){
        return{
          ...cartProduct,
          quantity:cartProduct.quantity + 1,
        }
      }
      return cartProduct

    })
    )

  }

  const addProductToCart=(product:CartProduct)=>{//Adicionar o produto a lista de produtos

    //Se o produto já estiver no carrinho, apenas aumente a sua quantidade
    const productIsInCart = products.some( (cartProduct )=> (cartProduct.id === product.id))

    if(productIsInCart){
      setProducts((prev)=>prev.map((cartProduct)=>{
        if(cartProduct.id === product.id){
          return{
            ...cartProduct,
            quantity: cartProduct.quantity + product.quantity,
          };
        }
        return cartProduct;
      })
      )
      return;
    }

    setProducts((prev)=>[...prev,product])//recebe o estado anterior (prev) como parâmetro está colocando product no final do array

  };

  const removeProductinCart=(productId:string)=>{
    setProducts((prev)=> prev.filter((cartProduct)=>(cartProduct.id!=productId)));
  }

  return (
   <div>
    <cartContext.Provider 
    value={{
        products,
        addProductToCart,
        decrementQuantity,
        incrementQuantity,
        removeProductinCart,
        subTotal,
        total,
        totaldiscount,
        cartTotalPrice: 0,
        cartBasePrice: 0, 
        cartTotalDiscount: 0,
        
    }} >
        {children}
    </cartContext.Provider>
   </div>
  )
}
