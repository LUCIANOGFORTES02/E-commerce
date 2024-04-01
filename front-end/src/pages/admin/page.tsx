import { Badge } from '@/components/ui/badge'
import { PackageIcon } from 'lucide-react'
import ProductsTable, { ProductWithTotalPriceAndCategory } from './components/products-table'
import { useEffect, useState } from 'react';
import { useApi } from '@/hooks/useApi';
import { computeProductTotalPrice } from '@/helpers/product';


interface productAndCategory {
        id: string;
        name: string;
        slug: string;
        description: string;
        basePrice: number;
        imageUrls: string[];
        categoryId: string;
        discountPercentage: number;
        category: { 
          name: string;               
        }
    
}



export default function AdminPage() {


    const api = useApi()

    const [products, setProducts] = useState<productAndCategory[]>();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await api.loadProductAndCategory();
                setProducts(data)
                console.log(products)
            } catch (error) {
                console.error('Erro ao carregar os produtos da categoria:', error);
            }
        };

        fetchData();
    }, []);

    const productsWithTotalPrice: ProductWithTotalPriceAndCategory[] =
    (products??[]).map((product) => ({
      ...product,
      totalPrice: computeProductTotalPrice(product),
    }));

  return (
    <div>
       <Badge className='w-fit border-primary border-2  px-3 py-[0.375rem]' variant='outline'>
            <PackageIcon size={20}/>
       </Badge>

      
      {/* Precisa passar o produto e sua respectiva categoria */}
     <ProductsTable products={productsWithTotalPrice}/>


        
    </div>
  )
}
