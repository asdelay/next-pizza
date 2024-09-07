import { cn } from '@/lib/utils'
import React, {FC} from 'react'

import { Container, Categories, SortPopup} from './'
import { Category } from '@prisma/client';
interface Props {
    className?: string;
    categories: Category[];
}

export const TopBar: FC<Props> = ({categories, className}) => {
  return (
    <nav className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
        <Container className="flex items-center justify-between">
            <Categories items={categories}/>
            <SortPopup />
        </Container>
    </nav>
  )
}

