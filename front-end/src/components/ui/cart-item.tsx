import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import { Button } from "./button";
import { CartProduct, cartContext } from "@/cart/CartContext";
import { useContext, useEffect } from "react";

interface CartItemProps{
    product: CartProduct
}

export default function CartItem({product}:CartItemProps) {
    const cart = useContext(cartContext)

    useEffect(()=>{

    });

    const handleRemoveProductClick=()=>{
        cart.removeProductinCart(product.id);
    }

  return (
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
            {/*Parte esquerda imagem e nome */}
            <div className="flex justify-center items-center bg-accent rounded-lg w-[75px] h-[75px] lg:h-[120px] lg:w-[120px]">
                <img 
                    src={product.imageUrls[0]}
                    alt={product.name}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto max-h-[70%] w-auto max-w-[80%]"
                    style={
                        {objectFit:"contain",}
                    }
                />
            </div>
            <div className="flex flex-col gap-1 lg:gap-2">
                <p className="text-xs">{product.name}</p>

                <div className="flex items-center gap-1 lg:text-base">
                    <p className="font-bold text-sm">R$ {product.totalPrice.toFixed(2)}</p>
                    {product.discountPercentage > 0 && (
                    <p className='opacity-75 line-through text-xs lg:text-sm'>R$ {Number(product.basePrice).toFixed(2)}</p> 
                    )}
                </div>
            
            
                <div className='flex items-center gap-1 lg:gap-3'>
                    <Button size="icon" variant="outline" className="h-8 w-8 lg:h-9 lg:w-9" onClick={()=>cart.decrementQuantity(product.id)}>
                        <ArrowLeftIcon className="h-4 w-4 lg:h-5 lg:w-5" />
                    </Button>
                    
                    <span className='text-xs lg:text-sm'>{ product.quantity }</span>

                    <Button size="icon" variant="outline" className="h-8 w-8 lg:h-9 lg:w-9"  onClick={()=>cart.incrementQuantity(product.id)}>
                        <ArrowRightIcon className="h-4 w-4 lg:h-5 lg:w-5"/>
                    </Button>
                </div>
            </div>

           
            

        </div>
            {/* Parte direita botão de deletar */}
            <Button 
                className="h-8 w-8 lg:h-9 lg:w-9"
                 size="icon" 
                 variant="outline" 
                 onClick={handleRemoveProductClick}>
                
                <TrashIcon className="h-4 w-4 lg:h-5 lg:w-5"/>
            </Button>

           
        
    </div>
  )
}
