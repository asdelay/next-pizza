'use client'
import { Dialog } from '@/components/ui'
import { DialogContent } from '@/components/ui/dialog'
import { cn } from '@/lib/utils';
import { Product } from '@prisma/client';
import { Title } from '@radix-ui/react-dialog';
import React, {FC} from 'react'

interface Props {
    className?: string;
    product: Product
}

export const ChooseProductModal: FC<Props> = ({className, product}) => {
return (
    <Dialog open={Boolean(product)}>
        <DialogContent className={cn('p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden', className)}>
            <Title>{product.name}</Title>
        </DialogContent>
    </Dialog>
)
}