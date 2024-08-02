import Image from 'next/image'
import Link from 'next/link'
import React, {FC} from 'react'
import { Title } from './';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
}

export const ProductCard: FC<Props> = ({className, id, name, price, imageUrl}) => {
return (
    <div className={className}>
        <Link href={`/product/${id}/`}>
            <div className="flex flex-col justify-center p-6 bg-secondary rounded-lg h-[260px]">
                {/* potential bugs (used Image from next instead of img 1:55:00) */}
                <img className='w-[215px] h-[215px]' src={imageUrl} alt={name} />

                <Title text={name} size='sm' className='mb-1 mt-3 font-bold'/>

                <p className='text-sm text-gray-400'>
                    увага захардкожені інгредієнти розпарсіть дані бічез
                </p>

                <div className="flex justify-between items-center mt-4">
                    <span className='text-[20px]'>
                        від <b>{price} ₴</b>
                    </span>

                    <Button variant='secondary' className='text-base font-bold'>
                        <Plus size={20} className='mr-1'/>
                        Додати
                    </Button>
                </div>
            </div>
        </Link>
    </div>
)
}