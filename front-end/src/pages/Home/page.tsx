import { useApi } from '@/hooks/useApi';
import Categories from './components/categories'
import ProductList from './components/product-list'
import { useEffect, useState } from 'react';
import { Product } from '@/types/Product';


export default function Home() {


  
  const api = useApi();
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const data = await api.loadProductDiscount();
              setProduct(data);
          } catch (error) {
              console.error('Erro ao carregar os produtos:', error);
          }
      };

      fetchData();
  }, []);

  return (
   
      <div >
        <img 
        src="/banner-home-01.png" 
        alt="Desconto de até 55%" 
        height={0} 
        width={0}
        className='h-auto w-full p-5' sizes='100vw'/>

        <div className="mt-5 p-5">
          <Categories/> 
        </div>
        <img 
        src="/banner-mouses.png" 
        alt="Desconto de até 55%" 
        height={0} 
        width={0} 
        className='h-auto w-full mt-5 p-5' sizes='100vw'/>

        <div className='mt-5'>
        <ProductList product={product}/>

        </div>


       
      </div >


        
  
  )
}
