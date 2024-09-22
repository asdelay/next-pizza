import { prisma } from "@/prisma/prisma-client";
import { updateCartTotalAmount } from "@/shared/lib/update-cart-total-amount";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH (req: NextRequest, {params}: {params: {id: string}} ) {
    try {
        const id = Number(params.id)
        const data = (await req.json()) as {quantity: number}
        const token = req.cookies.get('cartToken')?.value

        if (!token){
            return NextResponse.json({error: 'Cart token not found. Access denied.'})
        }

        const cartItem = await prisma.cartItem.findFirst({
            where: {
                id,
            }
        })

        if (!cartItem){
            return NextResponse.json({error: 'Cart item not found.'})
        }
        await prisma.cartItem.update({
            where: {
                id,
            },
            data: {
                quantity: data.quantity,
            }
        })

        const updatedUserCart = await updateCartTotalAmount(token)

        return NextResponse.json({updatedUserCart})
    } catch (e) {
        console.log('[CART_PATCH] Server error', e)
        return NextResponse.json({message: 'Unable to reload the cart'}, {status: 500})
    }
}