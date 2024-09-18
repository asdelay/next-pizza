import { ChooseProductModal } from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation';
import React from 'react'

const ProductModalPage = async ({params: {id}}: {params: {id: number}}) => {
    const product = await prisma.product.findFirst({
        where: {
            id: Number(id),
        },
        include: {
            ingredients: true,
            items: true,
        }
    })
    if (!product) {
        return notFound(); 
    }
return <ChooseProductModal product={product}/>
}
export default ProductModalPage