import { Product } from '@/types/Product'

interface ProductItensProp{
    product: Product;
}

export default function ProductItem({product}:ProductItensProp) {
  return (
    <div className="flex flex-col gap-4 max-w-[156px]">
      <div className="flex w-[9.75rem] h-[179px]  items-center justify-center rounded-lg bg-accent">
      <img 
      //src={product.imageUrls[0]} 
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-48s9K564ZxH7VR-FOsMClLpi6wfho2mWhFy67Sj48e_UakjDydpNs9ChxzNmv57yO4o&usqp=CAU'     
      height={0}
      width={0}
      sizes='100vw'
      className='h-auto w-auto max-w-[80%] max-h-[70%]'
      style={{
         objectFit: "contain",
       }}
      alt={product.name} />
      </div>
      
      <div>
        <p className='overflow-hidden text-ellipsis whitespace-nowrap'>
          {product.name}
        </p>
      </div>

    </div>
   
  )
}
