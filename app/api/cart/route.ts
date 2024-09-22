import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto"
import { findOrCreateCart } from "@/shared/lib";
import { CreateCartItemValues } from "@/shared/services/dto/cart.dto";

export async function GET (req: NextRequest) {
    try {
        const token = req.cookies.get('cartToken')?.value

        if(!token) {
            return NextResponse.json({totalAmount: 0, items: []})    
        }

        const userCart = await prisma.cart.findFirst({
            where: {
                OR: [
                    {token},
                ]
            },
            include: {
                items: {
                    orderBy: {
                        createdAt: 'desc'
                    },
                    include: {
                        productItem: {
                            include: {
                                product: true
                            },
                        },
                        ingredients: true
                    }
                }
            }
        })

        return NextResponse.json({userCart})
    } catch (e) {
        console.log('[CART_GET] Server error', e)
        NextResponse.json({error: 'Unable to get the cart'}, {status: 500})
    }
}

export async function POST (req: NextRequest) {
    try {
        let token = req.cookies.get('cartToken')?.value

        if (!token) {
            token = crypto.randomUUID()
        }

        const userCart = await findOrCreateCart(token)

        const data = (await req.json()) as CreateCatItemValues

        const findCartItem = await prisma.cartItem.findFirst({
            where: {
                cartId: userCart.id,
                productItemId: req.body.productItemId
            }
        })
    } catch (e) {
        console.log('[CART_POST] Server error', e)
        NextResponse.json({error: 'Unable to create the cart'}, {status: 500})
    }
}