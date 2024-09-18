import { Ingredient, Product, ProductItem } from "@prisma/client";

export type ProductWithReltions = Product & {items: ProductItem[], ingredients: Ingredient[]}