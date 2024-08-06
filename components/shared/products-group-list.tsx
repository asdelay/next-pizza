"use client"
import React, {FC, useRef, useEffect} from 'react'
import { ProductCard, Title } from './'
import { cn } from '@/lib/utils';
import {useIntersection} from 'react-use';
import { useCategoryStore } from '@/store/category';
interface Props {
    title: string;
    items: any[];
    categoryId: number;
    className?: string
    listClassName?: string;
}

export const ProductsGroupList: FC<Props> = ({
    className,
    title,
    items,
    categoryId,
    listClassName,
    }) => {
    const setActiveCategoryId = useCategoryStore(state => state.setActiveId)

    const intersectionRef = useRef(null)
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    })

    useEffect(() => {
        if(intersection?.isIntersecting){
            setActiveCategoryId(categoryId)
        }
    }, [categoryId, intersection?.isIntersecting, title])

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size='lg' className='font-extrabold mb-5'/>

            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {
                    items.map((product, index) => (
                        <ProductCard 
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            imageUrl={product.imageUrl}
                            price={product.items[0].price}
                        />
                    ))
                }
            </div>
        </div>
    )
}