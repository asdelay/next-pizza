'use client'
import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import React, {FC} from 'react'

interface Props {
    className?: string
}

export const Categories: FC<Props> = ({className}) => {
  const categories = [
    {id: 0, name: 'Піци',},
    {id: 1, name: 'Комбо',},
    {id: 2, name: 'Закуски',},
    {id: 3, name: 'Коктейлі',},
    {id: 4, name: 'Кава',},
    {id: 5, name: 'Напої',},
    {id: 6, name: 'Десерти',},
    ]
  const categoryActiveId = useCategoryStore(state => state.activeId)
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
        {categories.map((category, index) => {
            return(
                <a href={`/#${category.name}`} key={index} className={cn(
                    'flex items-center font-bold h-11 rounded-2xl px-5',
                    categoryActiveId === category.id && 'bg-white shadow-md shadow-gray-200 text-primary'
                )}>
                    <button>{category.name}</button>
                </a>
            )
        })}

    </div>
  )
}

