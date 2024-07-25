import { cn } from '@/lib/utils'
import React, {FC} from 'react'

interface Props {
    className?: string
}

export const Categories: FC<Props> = ({className}) => {
  const categories = ['Піци', 'Комбо', 'Закуски', 'Коктейлі', 'Кава', 'Напої', 'Десерти', 'Десерти', ]
  const activeIndex = 0
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
        {categories.map((category, index) => {
            return(
                <a key={index} className={cn(
                    'flex items-center font-bold h-11 rounded-2xl px-5',
                    activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary'
                )}>
                    <button>{category}</button>
                </a>
            )
        })}

    </div>
  )
}

