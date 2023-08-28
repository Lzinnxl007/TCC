'use client'

import { RemoveBg } from '@/utils/RemoveBg'
import { Translate } from '@/utils/Translate'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
export default function SliderRecipe({ recipe }) {

    console.log(recipe)

    const FormattedText = ({ text }) => {
        return <div dangerouslySetInnerHTML={{ __html: text }} />
    }

    const RecipeImage = async() => {
        const image = await RemoveBg(recipe.recipes[0].image)
        console.log(image)
        return <img src="" alt="recipe-image"/>
    }

    

    return (
        <div className="w-auto h-screen pt-10 px-4">
            <Slide
            autoplay={false}>
                <div className="w-full flex items-center justify-around">
                    <div className="w-full">
                        <img src={recipe?.recipes[0].image} alt="food-image" 
                        className="w-full"/>
                    </div>
                    <div className="px-8 space-y-4">
                        <div>{recipe?.recipes[0].diets.map((i, index) => {
                            return (
                                <p key={index} className="inline font-semibold">
                                    {i}, 
                                </p>
                            )
                        })}</div>
                        <h1 className="text-6xl leading-[60px] font-medium">
                            {recipe.recipes[0].title}
                        </h1>
                        <div className="max-w-2xl text-sm">
                            <FormattedText text={recipe?.recipes[0].summary} />
                        </div>
                    </div>
                </div>

                <div className="relative h-full w-full">
                    <div className="flex w-full items-center justify-center gap-10 absolute top-1/2 -translate-y-1/2">
                        <div>
                            <h1 className="font-medium text-4xl mb-6">Ingredientes</h1>
                            <div className="w-auto">
                                <ul>
                                {recipe?.recipes[0].extendedIngredients.map((ingredient) => {
                                    return (
                                        <li key={ingredient.id}>
                                            {ingredient.original}
                                        </li>
                                    )
                                })}
                                </ul>
                            </div>
                        </div>

                        <div className="max-w-xl">
                            <h1 className="font-medium text-4xl mb-6">Instruções</h1>
                            <FormattedText text={recipe?.recipes[0].instructions}/>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    )
}