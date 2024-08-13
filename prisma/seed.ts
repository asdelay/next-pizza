import { categories, ingredients } from "./constants"
import { prisma } from "./prisma-client"
import {hashSync} from "bcrypt"

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
        data: ingredients
    })
}

async function down () {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
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