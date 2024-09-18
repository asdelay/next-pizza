import { Ingredient, ProductItem } from "@prisma/client"
import { calcTotalPrice, usePizzaOptions } from "."
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/ pizza"

export const getPizzaDetails = (type: PizzaType, size: PizzaSize, items: ProductItem[], ingredients: Ingredient[], selectedIngredients: Set<number>) => {
    const totalPrice = calcTotalPrice(type, size, items, ingredients, selectedIngredients)
    const textDetails = `${size} cm, ${mapPizzaType[type]}`

    return {totalPrice, textDetails}
}