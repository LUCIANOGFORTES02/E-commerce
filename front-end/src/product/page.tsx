import { useApi } from '@/hooks/useApi';
//import { Product } from '@/types/Product';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductImages from './components/product-images';
import ProductInfo from './components/product-info';
import { computeProductTotalPrice } from '@/helpers/product';
import ProductList from '@/components/ui/product-list';
import SectionTitle from '@/components/ui/section-title';

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  basePrice: number;
  imageUrls: string[];
  categoryId: string;
  discountPercentage: number;
  category: {
    id: string;
    name: string;
    slug: string;
    imageUrl: string;
    products: any[]; // Ou você pode definir uma interface para os produtos da categoria
  }
}


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
                console.log(data)
                setProduct(data);
            } catch (error) {
                console.error('Erro ao carregar os produtos da categoria:', error);
            }
        };

        fetchData();
    }, []);

    if(!product)return null;
    console.log(product.category.products[0])

  return(
    <div className='flex flex-col gap-8 pb-8 lg:container lg:mx-auto lg:gap-10 lg:py-10'>
      <div className='flex flex-col gap-8 lg:flex-row lg:gap-9  lg:px-5'>
      <ProductImages imageUrls={product.imageUrls} name={product.name}/>
      <ProductInfo product={{
        ...product,
        totalPrice:computeProductTotalPrice(product)}}/>
      </div>
      <div className='flex flex-col gap-5'>
        <SectionTitle className="pl-5">Produtos Recomendados</SectionTitle>
        <ProductList product={product.category.products} />
      </div>
     
    </div>
  )
}
