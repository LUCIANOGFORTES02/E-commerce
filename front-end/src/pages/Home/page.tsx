import { useApi } from '@/hooks/useApi';
import Categories from './components/categories'
import ProductList from './components/product-list'
import { useEffect, useState } from 'react';
import { Product } from '@/types/Product';
import SectionTitle from './components/section-title';
import PromoBanner from './components/promo-banner';


export default function Home() {


  
  const api = useApi();
  const [product, setProduct] = useState<Product[]>([]);
  const [keyboards, setKeyboards] = useState<Product[]>([]);


  useEffect(() => {
      const fetchData = async () => {
          try {
              const data = await api.loadProductDiscount();
              const data2 = await api.loadProductCategory();
              setProduct(data);
              setKeyboards(data2);
          } catch (error) {
              console.error('Erro ao carregar os produtos:', error);
          }
      };

      fetchData();
  }, []);

  //Pegar a categoria e verificar o slug

  return ( 
      <div >
        <PromoBanner 
        src="/banner-home-01.png" 
        alt="Desconto de até 55%" />
        

        <div className="mt-5 p-5">
          <Categories/> 
        </div>
       

        <div className='mt-8'>
        <SectionTitle>Ofertas </SectionTitle>
          <ProductList product={product}/>
        </div>

        <PromoBanner 
        src="/banner-mouses.png " 
        alt="Desconto de até 55% em mouses" 
        />
         
        <div className='mt-8'>
          <SectionTitle>Teclados </SectionTitle>
          <ProductList product={keyboards}/>
        </div>

        <PromoBanner 
        src="/banner-mouses.png " 
        alt="Desconto de até 55% em mouses" 
        />
         
        <div className='mt-8'>
          <SectionTitle>Mouses </SectionTitle>
          <ProductList product={keyboards}/>
        </div>

        


       
      </div >


        
  
  )
}
