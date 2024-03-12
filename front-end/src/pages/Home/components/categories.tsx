
import CategoryItem from './category-item'
import { useApi } from '@/hooks/useApi'
import { Category } from "@/types/User";
import { useEffect,useState } from 'react';

export default function Categories() {
    
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
    }, [api]);

  return (
    <div className='grid grid-cols-2 gap-x-4 gap-y-2'>

        
     {  categories.map((category:Category)=>(
            <CategoryItem key={category.id} category={category}/>
     ))
       
 }
    </div>
  )
}
