import { cn } from '@/shared/lib/utils'
import React, {FC} from 'react'
import Image from "next/image"
import { Container } from './container'

import { Button } from '../ui/index'
import { User } from 'lucide-react'
import Link from 'next/link'
import { CartButton, SearchInput } from '.'

interface Props {
    className?: string
}

export const Header: FC<Props> = ({className}) => {
  return (
    <header className={cn('border border-b', className)}>
        <Container className='flex items-center justify-between py-8'>
            
            {/* Left Part (Logo) */}
            <Link href="/">
                <div className='flex items-center gap-4'>
                    <Image src="/logo.png" alt="Logo" width={35} height={35}/>
                    <div>
                        <h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
                        <p className='text-sm text-gray-400 leading-3'>nothing is more tasty</p>
                    </div>
                </div>
            </Link>

            {/* middle part */}
            <div className='mx-10 flex-1'>
                <SearchInput />
            </div>

            {/* Left Part */}
            <div className="flex items-center gap-3">
                <Button variant="outline" className='flex items-center gap-1'>
                    <User size={16}/>
                    Log In
                </Button>

                <div>
                    <CartButton />
                </div>
            </div>

        </Container>
    </header>
  )
}