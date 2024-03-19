import { Badge } from '@/components/ui/badge'
import { Category } from '@/types/Category'
import { CATEGORY_ICON } from '@/helpers/category-icons'
import { Link } from 'react-router-dom'

interface categoryItemProps{
    category: Category
}

export default function categoryItem( {category}:categoryItemProps) {


  return (
    <Link to={`/category/${category.slug}`}>
      <Badge variant='outline'
      className='flex items-center justify-center gap-2 rounded-lg py-3'>
          {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
          <span className='text-xs font-bold'>{category.name}</span>  
      </Badge>
    </Link>
  )
}
