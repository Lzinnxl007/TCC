

import { GetRecipes } from '@/utils/GetRecipes'
export default async function Recipe({ id }) {


    const recipes = await GetRecipes()

    const recipeById = await recipes.filter((recipe) => recipe.id == id)[0]


    return (
        <section className="w-full min-h-screen pt-10 px-4 bg-zinc-100  text-zinc-900">
                <div className="w-full flex lg:flex-col-reverse items-center justify-evenly lg:gap-8 lg:px-8 md:px-2">
                    <div className="w-full">
                        <img src={recipeById?.image} 
                        alt="food-image" 
                        className="w-full"/>
                    </div>
                    <div className="px-10 space-y-6 w-full lg:flex lg:items-center lg:flex-col md:px-4">
                        <div className="bg-[#ffaa49] lg:bg-transparent lg:text-[#ffaa49] lg:font-bold lg:text-xl px-3 py-1 w-fit rounded text-zinc-50 mb-10 lg:mb-2">
                            {recipeById?.meal}
                        </div>
                        <h1 className="text-6xl md:text-4xl leading-[60px] font-medium lg:text-center">
                            {recipeById?.name}
                        </h1>
                        <p className="max-w-xl text-sm lg:text-center lg:mt-4 lg:text-md">
                            {recipeById?.description}
                        </p>
                    </div>
                </div>

                <div className="mt-20 py-4 lg:px-4">
                    <div className="flex md:flex md:flex-col w-full items-center justify-around gap-10 md:gap-14 md:justify-center">
                        <div className="bg-[#FFE4C5] px-6 py-6 rounded max-w-lg md:max-w-md w-full">
                            <h1 className="font-medium text-3xl mb-6">Ingredientes</h1>
                            <div className="w-auto">
                                <ul>
                                    {recipeById?.ingredients?.map((ingredient, index) => {
                                        return (
                                            <li key={index}>- {ingredient}</li>
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
                                {recipeById?.instructions?.map((instruction, index) => {
                                    return (
                                        <li key={index} className="flex relative w-full">
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
                
        </section>
    )
}