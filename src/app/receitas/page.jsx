'use client'

import Header from "@/components/Default/Header"
import RecipeCard from "@/components/Recipes/RecipeCard"
import { useState, useEffect } from 'react'
import { GetRecipes } from "@/utils/recipes/GetRecipes"
import SelectCategory from "@/components/Recipes/SelectCategory"
import Loading from "@/components/Default/Loading"
import ScrollToTop from "@/components/Default/ScrollToTop"

export default function Recipes() {


    const [recipes, setRecipes] = useState([])
    const [filteredRecipes, setFilteredRecipes] = useState([])

    const getRecipes = async() => {
        setRecipes(await GetRecipes())
    }

    const filterByCategory = (e) => {
        if(e.target.value !== 'todas') {
            const recipesByCategory = recipes.filter((recipe) => recipe.meal == e.target.value)

            setFilteredRecipes(recipesByCategory)
        } else {
            setFilteredRecipes([])
        }
    }

    
     
    useEffect(() => {
        getRecipes(), []
    }, [])

    const createCard = () => {
       if(filteredRecipes.length) {
            return filteredRecipes.map((recipe, index) => {
                return (
                    <RecipeCard key={index} recipe={recipe}/>
                )
            })
       } else {
            return recipes.map((recipe, index) => {
                return (
                    <RecipeCard key={index} recipe={recipe}/>
                )
            })
       }
    }

    return (
        <div className="min-h-screen bg-[var(--light-grey)] dark:bg-zinc-900 ">
            <Header/>
            <div className="py-8 space-y-4 ">
                <h1 className="text-5xl font-bold text-orange-400 text-center md:text-4xl mx-auto">
                    Receitas Saudaveis
                </h1>
                <p className="text-center md:text-sm md:max-w-sm mx-auto dark:text-zinc-50 ">
                    Melhores sua alimentação com as melhores receitas para seu dia a dia.
                </p>
            </div>
            <div className="mt-6 w-full">
                <Loading/>
                <SelectCategory filterByCategory={filterByCategory}/>
                <div className="grid grid-cols-fit gap-6 p-6 ">
                {createCard()}
                </div>
            </div>
            <ScrollToTop/>
        </div>
    )
}