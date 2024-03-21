import { useContext, useState } from 'react'
import { Badge } from './badge'
import { ShoppingCartIcon } from 'lucide-react'
import { cartContext } from '@/cart/CartContext'
import CartItem from '../cart-item'
import { computeProductTotalPrice } from '@/helpers/product'

export default function Cart() {
  const cart = useContext(cartContext)
  
  return (
    <div className='flex flex-col gap-8'>
        <Badge 
          className='w-fit gap-1 border-2 bg-primary px-3 uppercase' 
          variant="outline"
          >
            <ShoppingCartIcon size={16}/>
            carrinho

        </Badge>
        <div className='flex flex-col gap-5'>
          {
              cart.products.map((product)=>(
              <CartItem key={product.id} product={computeProductTotalPrice(product) as any}/>
              ))
            }

        </div>

    </div>
  )
}
