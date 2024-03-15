import { Badge } from "@/components/ui/badge";
import { useApi } from "@/hooks/useApi";
import { ShapesIcon } from "lucide-react";
import { useEffect, useState } from "react";
import CategoryItem from "./components/category-item";
import { Category } from "@/types/Category";

export default function CatalogoPage() {

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
    <div className="flex flex-col gap-8 p-5">
      <Badge className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"  variant="outline">
        <ShapesIcon size={16} />
        Catálogo
      </Badge>
   
   <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
   
   </div>

  )
}
