import {useState, useEffect} from "react"
import { Ingredient } from "@prisma/client"
import {Api} from '../services/api-client'
interface ReturnProps {
    ingredients: Ingredient[]
}


export const useFilterIngredients = (): ReturnProps => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    useEffect(()=>{
        async function fetchIngredients() {
            try {
                const ingredients = await Api.ingredients.getAllIngredients()
                setIngredients(ingredients)
                return ingredients
            } catch (e) {
                console.log(e)
            }
        }
        fetchIngredients()
    },[])
    return {ingredients}
}