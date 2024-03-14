import {Product} from '@/types/Product'
import ProductItem from '@/components/ui/product-item';

interface ProductItensProp{
    product: Product[];
}

export default function ProductList({product}:ProductItensProp) {
  return (
    <div className='flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden'>
       
        {
            product.map((product)=>(
                <ProductItem  key={product.id} product={product}/>
            ))}


    
       

    </div>
  )
}
