import { useContext } from 'react'
import { Badge } from './badge'
import { ShoppingCartIcon } from 'lucide-react'
import { cartContext } from '@/cart/CartContext'
import CartItem from '../cart-item'
import { computeProductTotalPrice } from '@/helpers/product'
import { Separator } from './separator'

export default function Cart() {
  const cart = useContext(cartContext)
  
  return (
    <div className='flex flex-col gap-8'>
        <Badge 
          className='w-fit gap-1 border-2 border-primary px-3 uppercase' 
          variant="outline"
          >
            <ShoppingCartIcon size={16}/>
            carrinho

        </Badge>
        <div className='flex flex-col gap-5'>
          {
            cart.products.length>0 ?
            (cart.products.map((product)=>(
              <CartItem key={product.id} product={computeProductTotalPrice(product) as any}/>
              ))):
              ( <p className='text-center text-lg font-semibold'>Carrinho vazio</p>)
             
            }

        </div>


       { cart.products.length>0 && (
        <div className='flex flex-col gap-3'>
          <Separator/>
          <div className='flex items-center justify-between text-sm'>
            <p className='font-semibold'>Subtotal</p>
            <p>R$ {cart.subTotal.toFixed(2)}</p>
          </div>
          <Separator/>

          <div className='flex justify-between text-sm'>
            <p className='font-semibold'>Desconto</p>
            <p>- R$ {cart.totaldiscount.toFixed(2)}</p>
          </div>
          <Separator/>
          

          <div className='flex justify-between text-sm'>
            <p className='font-semibold'>Total</p>
            <p>R$ {cart.total.toFixed(2)}</p>
          </div>

         </div> 
        )}

    </div>
  )
}
