import { cn } from '@/lib/utils'
import React, {FC} from 'react'
import Image from "next/image"
import { Container } from './container'

import { Button } from '../ui/index'
import { ShoppingCart, User, ArrowRight } from 'lucide-react'

interface Props {
    className?: string
}

export const Header: FC<Props> = ({className}) => {
  return (
    <header className={cn('border border-b', className)}>
        <Container className='flex items-center justify-between py-8'>
            
            {/* Left Part (Logo) */}
            <div className='flex items-center gap-4'>
                <Image src="/logo.png" alt="Logo" width={35} height={35}/>
                <div>
                    <h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
                    <p className='text-sm text-gray-400 leading-3'>смачніше вже нема куди</p>
                </div>
            </div>

            {/* Left Part */}
            <div className="flex items-center gap-3">
                <Button variant="outline" className='flex items-center gap-1'>
                    <User size={16}/>
                    Увійти
                </Button>

                <div>
                    <Button className='group relative'>
                        <b>69 ₴</b>
                        <span className='h-full w-[1px] bg-white/30 mx-3'/>
                        <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                            <ShoppingCart className='h-4 w-4 relative' strokeWidth={2}/>
                            <b>1</b>
                        </div>
                        <ArrowRight className='w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'/>
                    </Button>
                </div>
            </div>

        </Container>
    </header>
  )
}