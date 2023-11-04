'use client'

import { useEffect, useState } from "react"
import { BookmarkPlus } from "lucide-react"
import { AddFavoriteRecipeAction } from "@/utils/recipes/AddFavoriteRecipeAction"
import { GetFavoriteRecipesAction } from "@/utils/recipes/GetFavoriteRecipesAction"
import Cookies from "js-cookie"
import { toast } from "react-toastify"
export default function AddFavorite({ recipeId }) {

    const [favorited, setFavorited] = useState(false)
    const [favoritedRecipes, setFavoritedRecipes] = useState([])

    const notLogin = () => toast("Faça login para adicionar receitas favoritas!")

    const favorite = async() => {
        await addFavoriteRecipe()
    }

    const getFavoritedRecipes = async() => {
        const user = Cookies.get('user') && JSON.parse(Cookies.get('user'))

        if(user) {
            const favoritedRecipes = JSON.parse((await GetFavoriteRecipesAction(user.id)).favorite_recipes)
            setFavoritedRecipes(favoritedRecipes)

            if(favoritedRecipes.includes(recipeId)) {
                setFavorited(true)
            }
        } else {
        
        }
        
    }

    useEffect(() => {
        getFavoritedRecipes()
    }, [])

    const addFavoriteRecipe = async() => {
        let user = Cookies.get('user') && JSON.parse(Cookies.get('user'))
        if(user) {
            setFavorited(true)
            if(!favorited){

                const favoritedRecipesClone = [...favoritedRecipes]

                if(!favoritedRecipesClone.includes(recipeId)) {
                    favoritedRecipesClone.push(recipeId)

                    await AddFavoriteRecipeAction(user.id, JSON.stringify(favoritedRecipesClone))

                }
            } else {
               setFavorited(false)

               let filteredFavoritedRecipes = [...favoritedRecipes]

               filteredFavoritedRecipes = filteredFavoritedRecipes.filter((recipe) => +recipe !== +recipeId)

               await AddFavoriteRecipeAction(user.id, JSON.stringify(filteredFavoritedRecipes))
            } 

        } else {
            notLogin()
        }

    }

    return (
        <button onClick={favorite}
        className="w-8 lg:w-6 aspect-square rounded flex items-center justify-center bg-orange-400 z-40">
            <BookmarkPlus className={`stroke-zinc-50 w-3/4 ${favorited && 'stroke-red-500 fill-red-500'}`}/>
        </button>
    )
}