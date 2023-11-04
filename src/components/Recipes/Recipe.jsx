'use client'

import { GetRecipes } from '@/utils/recipes/GetRecipes'
import { usePathname, useSearchParams } from "next/navigation"
import  { useState } from 'react'
import Loading from '@/components/Default/Loading'
import NutritionTable from './NutritionTable'
import CommentsForm from "@/components/Recipes/CommentsForm"
import Share from './Share'
import Comments from './Comments'
import AddFavorite from './AddFavorite'
import Notification from "../Notification/Notification"
export default function Recipe() {

    const searchParams = useSearchParams()

    const recipeId = searchParams.get('id')

    const [recipe, setRecipe] = useState(null)

    const getRecipe = async() => {
        const recipes = await GetRecipes()

        const recipeById = await recipes.filter((recipe) => recipe.id == recipeId)[0]

        setRecipe(await recipeById)
    }

    getRecipe()

    const path = usePathname()

    const query = `${path.split('/receita/')[1]}?id=${recipeId}`


    return (
        <div className="bg-[var(--light-grey)]">
            <Loading/>
            <Notification/>
            <div className="w-full min-h-screen pt-10 px-4  dark:bg-zinc-900 dark:text-zinc-50 bg-[var(--orange)] "> 
                <div className="w-full flex lg:flex-col-reverse items-center justify-evenly lg:gap-8 lg:px-8 md:px-2">
                    <div className="w-full h-[65vh]">
                        <img src={recipe?.image} 
                        alt="food-image" 
                        loading="lazy"
                        className="w-full h-full object-cover"/>
                    </div>
                    <div className="px-10 space-y-6 w-full lg:flex lg:items-center lg:flex-col md:px-4 ">
                       <div className="flex items-center justify-between mb-10 lg:flex-col">
                            <div className="bg-orange-400 lg:bg-transparent lg:text-[#ffaa49] font-semibold lg:text-xl px-3 py-1 w-fit rounded text-zinc-50 lg:mb-2">
                                {recipe?.meal}
                            </div>
                            <AddFavorite 
                            recipeId={recipeId}/>
                       </div>
                        <h1 className="text-6xl md:text-4xl leading-[60px] font-medium lg:text-center text-zinc-900 dark:text-zinc-50">
                            {recipe?.name}
                        </h1>
                        <p className="max-w-xl text-sm lg:text-center lg:mt-4 lg:text-md text-zinc-800 dark:text-zinc-100">
                            {recipe?.description}
                        </p>
                        <Share param={query}/>
                    </div>
                </div>

                <div className="mt-20 py-4 lg:px-4">
                    <div className="flex md:flex md:flex-col w-full items-center justify-around gap-10 md:gap-14 md:justify-center">
                        <div className="dark:bg-[#ffaa49] bg-orange-300 text-zinc-50 px-6 py-6 rounded max-w-lg md:max-w-md w-full">
                            <h1 className="font-semibold text-3xl mb-6 text-zinc-50">Ingredientes</h1>
                            <div className="w-auto">
                                <ul>
                                    {recipe?.ingredients?.map((ingredient, index) => {
                                        return (
                                            <li key={index}
                                            className="font-medium">-           {ingredient}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className="max-w-lg lg:max-w-xs mb-10">
                            <h1 className="font-medium text-3xl mb-6">
                                Modo de Preparo
                            </h1>
                            <ul className="space-y-4">
                                {recipe?.instructions?.map((instruction, index) => {
                                    return (
                                        <li key={index} className="flex relative w-full font-medium">
                                            <div className="w-5 h-5 rounded-full bg-orange-500 text-zinc-50 flex items-center justify-center text-sm font-semibold absolute top-[2px]">
                                                {index + 1}
                                            </div>
                                            <p className="translate-x-7">
                                                {instruction}
                                            </p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-around md:flex-col items-center">
                    <div className="mt-10 pb-10 px-4">
                        <NutritionTable nutrition={recipe?.nutrition}/>
                    </div>
                    <div className="mt-8 w-full max-w-md">
                        <CommentsForm/>
                        <Comments/>
                    </div>
                </div>
            </div>
        </div>
    )
}