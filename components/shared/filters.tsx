'use client'
import React, {FC} from 'react'

import { FilterCheckbox, Title, RangeSlider, CheckboxFiltersGroups } from './'
import { Input } from '../ui'
import { Ingredient } from '@prisma/client'
import {useFilterIngredients} from '../../hooks/useFilterIngredients'
interface Props {
    className?: string
}

export const Filters: FC<Props> = ({className}) => {
    const {ingredients} = useFilterIngredients()

    const items = ingredients.map(item => ({value: String(item.id), text: item.name}))

return (
    <div className={className}>
        <Title text="Фільтрація" size="sm" className='mb-5 font-bold'/> 

        {/* top checkboxes */}
        <div className="flex flex-col gap-4">
            <FilterCheckbox text="Можна зібрати" value="1"/>
            <FilterCheckbox text="Новинки" value="2"/>
        </div>

        {/* price inputs and slider */}
        <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
            <div className="font-bold mb-3">Ціна від та до:</div>
            <div className="flex gap-3 mb-5">
                <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0}/>
                <Input type='number' min={100} max={1000} placeholder='1000'/>
            </div>

            <RangeSlider min={0} max={1000} step={10} value={[0, 1000]}/>
        </div>
        <CheckboxFiltersGroups 
            title='Інгредієнти' 
            className='mt-5'
            limit={6}
            defaultItems={items.slice(0, 6)}
            items={items}

        />
    </div>
)
}