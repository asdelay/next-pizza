'use client'
import React, {FC} from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
  } from "@/shared/components/ui/sheet"
import Link from 'next/link'
import { Button } from '../ui'
import { ArrowRight } from 'lucide-react'
import { CartDrawerItem } from './cart-drawer-item'
import { useCartStore } from '@/shared/store'
import { getCartItemsDetails } from '@/shared/lib'
import { PizzaSize, PizzaType } from '@/shared/constants/ pizza'
  
interface Props {
    className?: string
}

export const CartDrawer: FC<React.PropsWithChildren<Props>> = ({children, className}) => {
    const [totalAmount, fetchCartItems, updateItemQuantity, removeCartItem, items] = useCartStore(state => [state.totalAmount, state.fetchCartItems, state.updateItemQuantity, state.removeCartItem, state.items])

    React.useEffect (() => {
        fetchCartItems()
    }, [])

    const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus'? quantity + 1 : quantity - 1
        updateItemQuantity(id, newQuantity)
    }

return (
    <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>    
        <SheetContent className='flex flex-col justify-between pb-0 bg-[#F4F1EE]'>
            <SheetHeader>
                <SheetTitle>
                    <span className='font-bold'>{items.length} item{items.length > 1 && 's'}</span>
                </SheetTitle>
            </SheetHeader>

            <div className='-mx-6 mt-5 overflow-auto flex-1'>
                {
                    items.map(item => (
                        <CartDrawerItem 
                            key={item.id} 
                            id={item.id} 
                            imageUrl={item.imageUrl} 
                            details={item.pizzaType && item.pizzaSize ? getCartItemsDetails(item.ingredients, item.pizzaType as PizzaType, item.pizzaSize as PizzaSize, ): ''} 
                            name={item.name} 
                            price={item.price} 
                            quantity={item.quantity}
                            onClickCountButton={type => onClickCountButton(item.id, item.quantity, type)}
                            onClickRemove={() => removeCartItem(item.id)}
                        />                
                    ))
                }
            </div>


            <SheetFooter className='-mx-6 bg-white p-8'>
                <div className="w-full">
                    <div className="flex mb-4">
                        <span className='flex flex-1 text-lg text-neutral-500'>
                            Total: 
                            <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2'/>
                        </span>
                        <span className='font-bold text-lg'>{totalAmount} €</span>
                    </div>

                    <Link href='/cart'>
                        <Button
                            type='submit'
                            className='w-full h-12 text-base'
                        >
                            Confirm the Order
                            <ArrowRight className='w-5 ml-2'/>
                        </Button>
                    </Link>
                </div>
            </SheetFooter>
        </SheetContent>    
    </Sheet>
)
}