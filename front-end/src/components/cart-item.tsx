import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import { Button } from "./ui/button";
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
            <div className="flex justify-center items-center bg-accent rounded-lg w-[75px] h-[75px]">
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
            <div className="flex flex-col">
                <p className="text-xs">{product.name}</p>

                <div className="flex items-center gap-1">
                    <p className="font-bold text-sm">R$ {product.totalPrice.toFixed(2)}</p>
                    {product.discountPercentage > 0 && (
                    <p className='opacity-75 line-through text-xs'>R$ {Number(product.basePrice).toFixed(2)}</p> 
                    )}
                </div>
            
            
                <div className='flex items-center gap-2'>
                    <Button size="icon" variant="outline" className="h-8 w-8" onClick={()=>cart.decrementQuantity(product.id)}>
                        <ArrowLeftIcon size={12} />
                    </Button>
                    
                    <span className='text-xs'>{ product.quantity }</span>

                    <Button size="icon" variant="outline" className="h-8 w-8"  onClick={()=>cart.incrementQuantity(product.id)}>
                        <ArrowRightIcon size={12}/>
                    </Button>
                </div>
            </div>

           
            

        </div>
            {/* Parte direita botão de deletar */}
            <Button size="icon" variant="outline" onClick={handleRemoveProductClick}>
                <TrashIcon size={16}/>
            </Button>

           
        
    </div>
  )
}
