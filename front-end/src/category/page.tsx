import { Badge } from '@/components/ui/badge';
import ProductItem from '@/components/ui/product-item';
import { computeProductTotalPrice } from '@/helpers/product';
import { useApi } from '@/hooks/useApi';
import { Product } from '@/types/Product';
import { CATEGORY_ICON } from '@/helpers/category-icons';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


export default function PageCategoryProducts() {

  const { slug } = useParams<{slug:string}>();
  const categorySlug = slug ?? ''; 
  
 
    const api = useApi();
    const [products, setProducts] = useState<Product[]>([]);
    const [category, setCategory] = useState<string>();
     

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await api.loadCategoryProducts(categorySlug);
                setCategory(data.name)
                setProducts(data.products);
            } catch (error) {
                console.error('Erro ao carregar os produtos da categoria:', error);
            }
        };

        fetchData();
    }, []);



  return (
    <div className="mx-auto flex flex-col gap-8 p-5 lg:container lg:gap-10 lg:py-10">
      <Badge className='w-fit gap-1 border-primary border-2 px-3 py-[0.375rem] text-base uppercase' variant='outline'>
      {CATEGORY_ICON[slug as keyof typeof CATEGORY_ICON]}
        {category}
      </Badge>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={
              computeProductTotalPrice(product)
            }
          />
        ))}
      </div>
    </div>
  );
}
