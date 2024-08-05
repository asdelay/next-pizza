import React, {FC} from 'react'
import { ProductCard, Title } from './'
import { cn } from '@/lib/utils';
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
    return (
        <div className={className}>
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