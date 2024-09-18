import { Ingredient, ProductItem } from "@prisma/client"
import { PizzaSize, PizzaType } from "../constants/ pizza"

/**
 * Function for calculating total price of pizza
 * @param type - type of selected pizza's base (thin or traditional)
 * @param size - size of selected pizza
 * @param items - list of pizza's variations
 * @param ingredients - list of ingredients
 * @param selectedIngredients - selected ingredients
 * @returns (number) - total price of 1 pizza 
 */

export const calcTotalPrice = (
    type: PizzaType, 
    size: PizzaSize, 
    items: ProductItem[], 
    ingredients: Ingredient[], 
    selectedIngredients: Set<number>
) => {
    const pizzaPrice = items.find((item) => item.pizzaType === type && item.size === size)?.price || 0
    const totalIngrediendtPrice = ingredients.filter(ingredient => selectedIngredients.has(ingredient.id)).reduce((acc, ingredient) => acc+ingredient.price, 0)

    return pizzaPrice + totalIngrediendtPrice
}