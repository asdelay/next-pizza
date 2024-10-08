import React, {FC} from 'react'
import { Title } from '.'
import { cn } from '@/shared/lib/utils';
import { Button } from '../ui';

interface Props {
    imageUrl: string;
    name: string;
    onClickAdd?: VoidFunction;
    className?: string;
}

export const ChooseProductForm: FC<Props> = ({className, name, imageUrl, onClickAdd}) => {
    const textDetails = '30 cm, traditional base'
    const totalPrice = 10
return (
    <div className={cn('flex flex-1', className)}>
        <div className="flex items-center justify-center flex-1 relative w-full">
            <img 
                src={imageUrl} 
                alt={name} 
                className='relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]' 
            />
        </div>

        <div className="w=[490px] bg-[#f7f6f5] p-7">
            <Title text={name} size='md' className='font-extrabold mb-1'/>

            <p className='text-gray-400'>{textDetails}</p>

            <Button 
                onClick={onClickAdd}
                className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
            >
              Add to the cart for {totalPrice} €  
            </Button>
        </div>
    </div>
)
}