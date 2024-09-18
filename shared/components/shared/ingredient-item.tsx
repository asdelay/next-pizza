import { cn } from '@/shared/lib/utils';
import { CircleCheck } from 'lucide-react';
import React, {FC} from 'react'

interface Props {
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
    active?: boolean;
    onClick?: () => void;
}

export const IngredientItem: FC<Props> = ({className, onClick, name, price, imageUrl, active}) => {
return (
    <div className={cn(
        'flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white', 
        {'border border-primary': active},
        className
    )} onClick={onClick}>
        {active && <CircleCheck className='absolute top-2 right-2 text-primary'/>}
        <img src={imageUrl} alt={name} width={110} height={110} />
        <span className='text-xs mb-1'>{name}</span>
        <span className='font-bold'>{price} €</span>
    </div>
)
}