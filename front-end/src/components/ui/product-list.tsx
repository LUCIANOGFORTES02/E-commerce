import {Product} from '@/types/Product'
import ProductItem from '@/components/ui/product-item';
import { computeProductTotalPrice } from '@/helpers/product';


interface ProductListProp{
    product: Product[];
}

export default function ProductList({product}:ProductListProp) {
  return(
    
    <div className='flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden'>
       
        {
            product.map((product)=>( 
                <ProductItem  key={product.id} 
                product={
                 { ...product,
                  totalPrice :computeProductTotalPrice(product)}}
                className="w-[156px] lg:w-[200px] lg:min-w-[200px]"
                />
            ))}

    </div>
  )
}
