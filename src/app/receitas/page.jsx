'use client'

import Header from "@/components/Default/Header"
import RecipeCard from "@/components/Recipes/RecipeCard"
import { useState, useEffect } from 'react'
import { GetRecipes } from "@/utils/recipes/GetRecipes"
import SelectCategory from "@/components/Recipes/SelectCategory"
import Loading from "@/components/Default/Loading"
import ScrollToTop from "@/components/Default/ScrollToTop"
import { GetFavoriteRecipesAction } from "@/utils/recipes/GetFavoriteRecipesAction"
import Cookies from "js-cookie"
import { toast } from "react-toastify"
import Notification from "@/components/Notification/Notification"
import Footer from "@/components/Default/Footer"
export default function Recipes() {

    const [recipes, setRecipes] = useState([])
    const [filteredRecipes, setFilteredRecipes] = useState([])

    const user = Cookies.get('user') && JSON.parse(Cookies.get('user'))

    const notLogin = () => toast("Faça login para ver suas receitas favoritas")

    const getRecipes = async() => {
        setRecipes(await GetRecipes())
        setFilteredRecipes(await GetRecipes())
    }

    console.log(filteredRecipes)

    const filterByCategory = async(e) => {
        if(e.target.value !== 'todas') {
            const recipesByCategory = recipes?.filter((recipe) => recipe.meal == e.target.value)

            setFilteredRecipes(recipesByCategory)

        } else {
            setFilteredRecipes([...recipes])
        }
        if(e.target.value == 'Favoritas') {
            if(user) {
                const favoritedRecipes = await GetFavoriteRecipesAction(user.id)

                const favoritedRecipesId = JSON.parse(favoritedRecipes.favorite_recipes)

                const filterRecipe = recipe => favoritedRecipesId.includes(recipe.id.toString())

                setFilteredRecipes(recipes.filter(filterRecipe))

            } else {
                notLogin()
            }

        } 
        
    }

    useEffect(() => {
        getRecipes(), []
    }, [])

 
    return (
        <div className="min-h-screen bg-[var(--light-grey)] dark:bg-zinc-900">
            <Loading/>
            <Header/>
            <div className="py-8 space-y-4 ">
                <Notification/>
                <h1 className="text-5xl font-bold text-orange-400 text-center md:text-4xl mx-auto">
                    Receitas Saudaveis
                </h1>
                <p className="text-center md:text-sm md:max-w-sm mx-auto dark:text-zinc-50 ">
                    Melhores sua alimentação com as melhores receitas para seu dia a dia.
                </p>
            </div>
            <div className="mt-6 mb-20">
                <SelectCategory filterByCategory={filterByCategory}/>
                <div className="w-auto grid grid-cols-fit gap-6 p-6">
                    {filteredRecipes?.map((recipe, index) => {
                        return (
                            <RecipeCard key={index} recipe={recipe}/>
                        )
                    })}
                </div>
            </div>
            <ScrollToTop/>
            <Footer/>
        </div>
    )
}