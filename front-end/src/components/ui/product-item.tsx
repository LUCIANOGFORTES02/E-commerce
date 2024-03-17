import { ProductWithTotalPrice } from '@/helpers/product';
import { Badge } from './badge';
import { ArrowDownIcon } from 'lucide-react';
import { Link } from 'react-router-dom';


interface ProductProp{
    product: ProductWithTotalPrice;
    className?: string
}
export default function ProductItem({product,className}:ProductProp) {
  return (
    <Link
    to={`/product/${product.slug}`} 
    className={`flex min-w-[156px] flex-col gap-4 ${className}`}
    >
 
      <div className="relative flex aspect-square w-full items-center justify-center rounded-lg bg-accent">
      <img 
      src={product.imageUrls[0]} 
      //src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-48s9K564ZxH7VR-FOsMClLpi6wfho2mWhFy67Sj48e_UakjDydpNs9ChxzNmv57yO4o&usqp=CAU'     
      height={0}
      width={0}
      sizes='100vw'
      className='h-auto w-auto max-w-[80%] max-h-[70%]'
      style={{
         objectFit: "contain",
       }}
      alt={product.name} />

      {product.discountPercentage > 0 && (
        <Badge className='absolute left-2 top-2 px-2 py-[1px]' >
          <ArrowDownIcon size={14}/> {product.discountPercentage} %
        </Badge>

      )}
      </div>
      
      <div>
       <p className="truncate text-sm">{product.name}</p>
       
        
        <div className="flex items-center gap-1 ">
          {product.discountPercentage > 0 && (
            <>
              <p className="truncate font-semibold lg:text-lg">
                R$ {product.totalPrice.toFixed(2)}
              </p>

              <p className="truncate text-xs line-through opacity-75 lg:text-sm">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          )  }

           {product.discountPercentage === 0 && (
            <>
            

              <p className="truncate font-semibold lg:text-lg">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          )  }

          
        </div>
      </div>
  
  </Link>
  )
}
