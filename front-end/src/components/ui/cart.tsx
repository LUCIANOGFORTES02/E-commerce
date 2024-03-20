import React, { useContext } from 'react'
import { Badge } from './badge'
import { ShoppingCartIcon } from 'lucide-react'
import { cartContext } from '@/cart/CartContext'

export default function Cart() {
  const cart = useContext(cartContext)
  return (
    <div>
        <Badge 
        className='w-fit gap-1 border-2 bg-primary px-3 uppercase' 
        variant="outline"
        >
            <ShoppingCartIcon size={16}/>
            carrinho

        </Badge>
        {
          cart.products.map((product)=>(
            <p>{product.name}</p>
          ))
        }
    </div>
  )
}
