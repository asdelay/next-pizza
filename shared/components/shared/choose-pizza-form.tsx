'use client'
import { cn } from '@/shared/lib/utils'
import React, {FC} from 'react'
import { GroupVariants, IngredientItem, PizzaImage, Title } from '.'
import { Button } from '../ui'
import { PizzaSize, PizzaType, pizzaTypes } from '@/shared/constants/ pizza';
import { Ingredient, ProductItem } from '@prisma/client';
import { getPizzaDetails } from '@/shared/lib/';
import { usePizzaOptions } from '@/shared/lib/use-pizza-options';

interface Props {
    imageUrl: string;
    name: string;
    ingredients: Ingredient[];
    items: ProductItem[];
    onClickAddCart?: VoidFunction;
    className?: string;
}

export const ChoosePizzaForm: FC<Props> = ({className, name, items, ingredients, imageUrl, onClickAddCart}) => {
    const {size, type, selectedIngredients, availableSizes: availablePizzaSizes, setSize, setType, addIngredient} = usePizzaOptions(items)
    const {totalPrice, textDetails} = getPizzaDetails(type, size, items, ingredients, selectedIngredients)

    const handleClickAdd = () => {
        onClickAddCart?.()
        console.log({
            size,
            type,
            ingredients: selectedIngredients
        })
    }

return (
    <div className={cn('flex flex-1', className)}>
        <PizzaImage imageUrl={imageUrl} size={size} />

        <div className="w-[490px] bg-[#f7f6f5] p-7">
            <Title text={name} size='md' className='font-extrabold mb-1'/>

            <p className='text-gray-400'>{textDetails}</p>

            <div className='flex flex-col gap-4 mt-5 text-center'>
                <GroupVariants items={availablePizzaSizes} value={String(size)} onClick={value => setSize(Number(value) as PizzaSize)}/>
                <GroupVariants items={pizzaTypes} value={String(type)} onClick={value => setType(Number(value) as PizzaType)}/>
            </div>

            <div className="bg-gray-50 p-5 rounded-md h-[250px] mt-5 overflow-auto scrollbar">
                <div className="grid grid-cols-3 gap-3">
                    {ingredients.map((ingredient) => (
                        <IngredientItem 
                            key={ingredient.id}
                            name={ingredient.name} 
                            price={ingredient.price} 
                            imageUrl={ingredient.imageUrl} 
                            onClick={() => addIngredient(ingredient.id)}
                            active={selectedIngredients.has(ingredient.id)}

                        />
                    )
                    )}
                </div>
            </div>

            <Button 
                onClick={handleClickAdd}
                className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
            >
              Add to the cart for {totalPrice} €  
            </Button>
        </div>
    </div>
)
}