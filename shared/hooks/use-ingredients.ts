import { useState, useEffect } from "react"
import {Api} from '../services/api-client'
import { Ingredient } from "@prisma/client"
export const useIngredients = () => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function fetchIngredients() {
            try {
                const ingredients = await Api.ingredients.getAllIngredients()
                setIngredients(ingredients)
                setLoading(true)
                return ingredients
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }
        fetchIngredients()
    },[])

    return {loading, ingredients}
}