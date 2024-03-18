import { useApi } from '@/hooks/useApi';
import { Product } from '@/types/Product';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetailsPage() {

  const { slug } = useParams<{slug:string}>();
  const productSlug = slug ?? ''; 
  

    const api = useApi();
    const [product, setProduct] = useState<Product|null>(null);
    //const [product, setProduct] = useState<string>();
     

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await api.loadProductBySlug(productSlug);
                //setCategory(data.name)
                setProduct(data);
            } catch (error) {
                console.error('Erro ao carregar os produtos da categoria:', error);
            }
        };

        fetchData();
    }, []);

    if(!product)return null;


  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  )
}
