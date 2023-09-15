'use client'

import StarRatings from 'react-star-ratings'
import { Clock4 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
export default function RecipeCard({ recipe }) {

    const { theme } = useTheme()

    const router = useRouter()

    const viewRecipe = (recipe) => {
        router.push(`/receita/${recipe.name}?id=${recipe.id}`)
    }


    return (
        <button onClick={() => viewRecipe(recipe)}
        className={`w-full min-h-[400px] max-w-xs md:max-w-md md:h-[350px] rounded ${theme == 'light' ? 'bg-zinc-100' : 'bg-zinc-800'} dark:bg-zinc-800 dark:text-zinc-50
         transition hover:shadow-[6px_6px_0_rgb(255,170,73)] cursor-pointer overflow-hidden 
         hover:translate-y-[5px] mx-auto`}>
            <div className="w-full h-3/5 relative bottom-4">
                <img src={recipe.image} 
                alt="recipe-image" 
                className="w-full h-full object-cover absolute top-0 left-0"/>
            </div>
            <div className={`w-full p-4 flex flex-col items-start ${theme == 'dark' ? 
                'text-zinc-50' : 'text-zinc-900'}`}>
                <span className="text-orange-500 text-medium">
                    {recipe.meal}
                </span>
                <h2 className="my-3 font-semibold text-xl text-left">
                    {recipe.name}
                </h2>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <Clock4 size={20}/>
                        <p className="text-xs">{recipe.prep_time}</p>
                    </div>
                    <div>
                        <StarRatings
                        rating={4.5}
                        starDimension="25px"
                        starSpacing="2px"
                        starRatedColor="rgb(255,244,8)"/>
                    </div>
                </div>
            </div>
        </button>
    )
}