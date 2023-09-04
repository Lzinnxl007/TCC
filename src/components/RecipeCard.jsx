'use client'

import StarRatings from 'react-star-ratings'
import { Clock4 } from 'lucide-react'
import { useRouter } from 'next/navigation'
export default function RecipeCard({ recipe }) {

    const router = useRouter()

    const viewRecipe = (recipe) => {
        console.log(recipe)
        router.push(`/${recipe.name}?id=${recipe.id}`)
    }


    return (
        <button onClick={() => viewRecipe(recipe)}
        className="w-full h-[330px] max-w-xs md:max-w-sm md:h-[350px] rounded bg-zinc-50 transition hover:shadow-[6px_6px_0_rgb(255,170,73)] cursor-pointer overflow-hidden hover:translate-y-[5px] mx-auto ">
            <div className="w-full h-3/5 relative">
                <img src={recipe.image} 
                alt="recipe-image" 
                className="w-full h-full object-cover"/>
            </div>
            <div className="w-full p-4 flex flex-col items-start">
                <span className="text-orange-500 text-medium">
                    {recipe.meal}
                </span>
                <h2 className="my-3 font-semibold text-xl">
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