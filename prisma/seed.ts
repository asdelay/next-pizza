import { connect } from "http2"
import { categories, _ingredients, products } from "./constants"
import { prisma } from "./prisma-client"
import {Prisma} from '@prisma/client'
import {hashSync} from "bcrypt"

const randomDecimalNumber = (min : number, max : number) => {
    return Math.floor(Math.random() * (max-min) * 10 + min * 10) / 10
}

const generateProductItem = ({
    productId,
    pizzaType,
    size,
  }: {
    productId: number;
    pizzaType?: 1 | 2;
    size?: 20 | 30 | 40;
  }) => {
    return {
      productId,
      price: randomDecimalNumber(190, 600),
      pizzaType,
      size,
    } as Prisma.ProductItemUncheckedCreateInput;
}

async function up () {
    await prisma.user.createMany({
        data: [
            {
                fullName: "ali4ka k1rn0sik test", 
                email: "allka.kirnosik2@gmail.com", 
                password: hashSync("qweqwewqe", 10), 
                role: "USER", 
                verified: new Date()
            },
            {
                fullName: "kitsyunya test", 
                email: "lysazhopa2@gmail.com", 
                password: hashSync("admin", 10), 
                role: "ADMIN", 
                verified: new Date()
            },
        ]
    })
    await prisma.category.createMany({
        data: categories
    })
    await prisma.ingredient.createMany({
        data: _ingredients
    })
    await prisma.product.createMany({
        data: products
    })

    const pizza1 = await prisma.product.create({
        data: {
            name: "Pepperoni Fresh",
            imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
            categoryId: 1,
            ingredients: {
                connect: _ingredients.slice(0, 5)
            }
        }
    })
    const pizza2 = await prisma.product.create({
        data: {
            name: "Cheesy",
            imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D610D2925109AB2E1C92CC5383C.avif",
            categoryId: 1,
            ingredients: {
                connect: _ingredients.slice(5, 10)
            }
        }
    })
    const pizza3 = await prisma.product.create({
        data: {
            name: "Chorizo",
            imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif",
            categoryId: 1,
            ingredients: {
                connect: _ingredients.slice(10, 40)
            }
        }
    })

    await prisma.productItem.createMany({
        data: [
            //Пепероні фреш
            generateProductItem({productId: pizza1.id, pizzaType: 1, size: 20}),
            generateProductItem({productId: pizza1.id, pizzaType: 2, size: 30}),
            generateProductItem({productId: pizza1.id, pizzaType: 2, size: 40}),

            // Сирна піца
            generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
            generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),

            // Піца чорізо фреш
            generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
            generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
            generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40 }),

            // Інші продукти
            generateProductItem({ productId: 1 }),
            generateProductItem({ productId: 2 }),
            generateProductItem({ productId: 3 }),
            generateProductItem({ productId: 4 }),
            generateProductItem({ productId: 5 }),
            generateProductItem({ productId: 6 }),
            generateProductItem({ productId: 7 }),
            generateProductItem({ productId: 8 }),
            generateProductItem({ productId: 9 }),
            generateProductItem({ productId: 10 }),
            generateProductItem({ productId: 11 }),
            generateProductItem({ productId: 12 }),
            generateProductItem({ productId: 13 }),
            generateProductItem({ productId: 14 }),
            generateProductItem({ productId: 15 }),
            generateProductItem({ productId: 16 }),
            generateProductItem({ productId: 17 }),
        ]
    })

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: '111111',
            },
            {
                userId: 2,
                totalAmount: 0,
                token: '222222',
            }
        ]
    })

    await prisma.cartItem.create({
        data:{
            productItemId: 1,
            cartId: 1,
            quantity: 2,
            ingredients: {
                connect: [{id:1}, {id:2}, {id:3}, {id:4}]
            }
        }
    })
}

async function down () {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`
}

async function main () {
    try {
        await down()
        await up()
    } catch (e) {
        console.error(e)
    }
}

main()
    .then(async()=>{
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect
        process.exit(1)
    })