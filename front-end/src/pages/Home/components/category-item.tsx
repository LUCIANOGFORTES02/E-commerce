import { Badge } from '@/components/ui/badge'
import { Category } from '@/types/User'
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from 'lucide-react'



interface categoryItemProps{
    category: Category
}

export default function categoryItem( {category}:categoryItemProps) {

    const categoryIcon ={
        keyboards:<KeyboardIcon size={16}/>,
        monitors:<MonitorIcon size={16}/>,
        headphones:<HeadphonesIcon size={16}/>,
        mousepads:<SquareIcon size={16}/>,
        speakers:<SpeakerIcon size={16}/>,
        mouses:<MouseIcon size={16}/>



    }

  return (
    <Badge variant='outline'
    className='flex items-center justify-center gap-2 rounded-lg py-3'>
        {categoryIcon[category.slug as keyof typeof categoryIcon]}
        <span className='text-xs font-bold'>{category.name}</span>
        
    </Badge>
    // retornar as categorias do backend
  )
}
