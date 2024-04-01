import { useContext } from 'react'
import { Badge } from './badge'
import { ShoppingCartIcon } from 'lucide-react'
import { cartContext } from '@/cart/CartContext'
import CartItem from './cart-item'
import { computeProductTotalPrice } from '@/helpers/product'
import { Separator } from './separator'
import { ScrollArea } from './scroll-area'
import { Button } from './button'

export default function Cart() {
  const cart = useContext(cartContext)
  
  return (
    <div className='flex flex-col gap-8 h-full'>
        <Badge 
          className='w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] uppercase' 
          variant="outline"
          >
            <ShoppingCartIcon size={16}/>
            carrinho
        </Badge>

        <div className='flex h-full max-h-full flex-col gap-5 overflow-hidden'>
          <ScrollArea className='h-full'>
            <div className='flex h-full flex-col gap-6'>
            {
              cart.products.length>0 ?
              (cart.products.map((product)=>(
                <CartItem key={product.id} product={ computeProductTotalPrice(product) as any}/>
                ))):
                ( <p className='text-center text-lg font-semibold'>Carrinho vazio</p>)
              
              }
            </div>
          </ScrollArea>
        </div>

       { cart.products.length>0 && (
        <div className='flex flex-col gap-3'>
          <Separator/>
          <div className='flex items-center justify-between text-sm'>
            <p className='font-semibold'>Subtotal</p>
            <p>R$ {cart.subTotal.toFixed(2)}</p>
          </div>
          <Separator/>

          <div className='flex items-center justify-between text-sm'>
            <p className='font-semibold'>Desconto</p>
            <p>- R$ {cart.totaldiscount.toFixed(2)}</p>
          </div>
          <Separator/>
          

          <div className='flex items-center justify-between text-sm'>
            <p className='font-semibold'>Total</p>
            <p>R$ {cart.total.toFixed(2)}</p>
          </div>

         </div> 
        )}

        <Button className="mt-7 font-bold uppercase">
            Finalizar compra
        </Button>

    </div>
  )
}
