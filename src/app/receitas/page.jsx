'use client'

import Header from "@/components/Header"
import RecipeCard from "@/components/RecipeCard"
import { useTheme } from "next-themes"
import { useState, useEffect } from 'react'
import { GetRecipes } from "@/utils/GetRecipes"
import SelectCategory from "@/components/SelectCategory"

export default function Recipes() {

    const { theme } = useTheme()

    const [recipes, setRecipes] = useState([])

    const filterByCategory = (e) => {
        if(e.target.value !== 'todas') {
            const recipesByCategory = recipes.filter((recipe) => recipe.meal == e.target.value)

            setRecipes(recipesByCategory)
        }
    }

    const getRecipes = async(e) => {
        setRecipes(await GetRecipes())

        if(recipes.length) {
            await filterByCategory(e)
        }
    }
     
    useEffect(() => {
        getRecipes(), []
    }, [])

    return (
        <div className={`h-auto w-screen dark:bg-zinc-900 ${theme == 'light' ? 'bg-[var(--orange)]' : 'bg-zinc-900'}`}>
            <Header/>
            <div className="py-8 space-y-4 ">
                <h1 className="text-5xl font-bold text-orange-400 text-center md:text-4xl mx-auto">
                    Receitas Saudaveis
                </h1>
                <p className={`text-center md:text-sm md:max-w-sm mx-auto dark:text-zinc-50 ${theme == 'dark' ? 'text-zinc-50' : 'text-zinc-900'}`}>
                    Melhores sua alimentação com as melhores receitas para seu dia a dia.
                </p>
            </div>
            <div className="mt-6">
                <SelectCategory getRecipes={getRecipes}/>
                <div className="grid grid-cols-fit gap-6 p-6 ">
                {recipes?.map((recipe, index) => {
                        return (
                            <RecipeCard key={index} recipe={recipe}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}