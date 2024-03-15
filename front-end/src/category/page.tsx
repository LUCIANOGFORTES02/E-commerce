import { Badge } from '@/components/ui/badge';
import ProductItem from '@/components/ui/product-item';
import { computeProductTotalPrice } from '@/helpers/product';
import { useApi } from '@/hooks/useApi';
import { Category } from '@/types/Category';
import React, { useEffect, useState } from 'react'

export default function PageCategory() {
    const api = useApi();
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await api.loadCategories();
                setCategories(data);
            } catch (error) {
                console.error('Erro ao carregar categorias:', error);
            }
        };

        fetchData();
    }, []);



  return (
    <div className="mx-auto flex flex-col gap-8 p-5 lg:container lg:gap-10 lg:py-10">
      <Badge variant='outline'>
        {/* {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {category.name} */}
      </Badge>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={{
              ...product,
              totalPrice: computeProductTotalPrice(product),
            }}
          />
        ))}
      </div>
    </div>
  );
}
