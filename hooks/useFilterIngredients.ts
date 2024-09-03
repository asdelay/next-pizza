import {useState, useEffect} from "react"
import { Ingredient } from "@prisma/client"
import {Api} from '../services/api-client'
import { useSet } from "react-use"
interface ReturnProps {
    ingredients: Ingredient[];
    loading: boolean;
    selectedIds: Set<string>;
    onAddId: (id: string) => void;
}


export const useFilterIngredients = (): ReturnProps => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [loading, setLoading] = useState(true)

    const [selectedIds, {toggle}] = useSet(new Set<string>(['hello']))

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
    return {ingredients, loading, onAddId:toggle, selectedIds}
}