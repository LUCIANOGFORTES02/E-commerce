import { cartContext } from '@/cart/CartContext'
import CartProvider from '@/cart/CartProvider'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ProductWithTotalPrice } from '@/helpers/product'
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, TruckIcon } from 'lucide-react'
import { useContext, useState } from 'react'

interface ProductInfosProps{
    //Pick permite selecionar um subconjunto de propriedades de um tipo existente e criar um novo tipo com base
    //nessas propriedades selecionadas type NovoTipo = Pick<TipoExistente, 'Propriedade1' | 'Propriedade2' | ...>;

    product: 
    ProductWithTotalPrice,       
    
}

export default function ProductInfo({product}:ProductInfosProps ) {
    const cart = useContext(cartContext)
    const [quantity,setQuantity] = useState(1);

    const handleDecrementClick=()=>{
        setQuantity((current)=> (current===1 ? current = 1 : current-1))
        
    }
    const handleIncreasingClick=()=>{
        setQuantity((current)=> current+1)
    }

    const handleAddToProduct=()=>{
        cart.addProductToCart({...product,quantity})
    }



  return (
    <div className='flex flex-col px-5'>
        <h2 className='text-lg'>{product.name}</h2>

        <div className='flex items-center gap-2'>
            <h1 className='text-xl font-bold'>R$ {product.totalPrice.toFixed(2)}</h1>
            {product.discountPercentage > 0 && (
                <Badge className='px-2 py-[0.125rem]' >
                    <ArrowDownIcon size={14}/> {product.discountPercentage}%
                </Badge>
            )}
        </div>product.

        {product.discountPercentage > 0 && (
            <p className='opacity-75 line-through text-sm'>R$ {Number(product.basePrice).toFixed(2)}</p>
              
        )}

        <div className='flex items-center gap-2 mt-4'>
            <Button size="icon" variant="outline" onClick={handleDecrementClick}>
                <ArrowLeftIcon size={16} />
            </Button>
            
            <span className=''>{ quantity }</span>

            <Button size="icon" variant="outline" onClick={handleIncreasingClick}>
                <ArrowRightIcon size={16}/>
            </Button>

        </div>
        <div className='flex flex-col gap-2 mt-4'>
            <h3 className='font-bold'>Descrição</h3>
            <p className='text-justify text-sm opacity-65'>{product.description}</p> 
        </div>

        <Button 
            className='mt-8 font-bold uppercase'
            onClick={handleAddToProduct}
        >
            adicionar ao carrinho
        </Button>

        <div className='mt-5 flex items-center justify-between rounded-lg bg-accent px-5'>
            <div className='flex items-center gap-2'>
                <TruckIcon/>
                <div className='flex flex-col'>
                    <p className='text-xs'>Entrega via <span className='font-bold'>Sedex</span></p>
                    <p className='text-xs text-purple-400'>Envio para todo Brasil</p>

                </div>

            </div>
            <p className='text-xs font-bold'>Frete Grátis</p>


        </div>



        

    </div>
  )
}
