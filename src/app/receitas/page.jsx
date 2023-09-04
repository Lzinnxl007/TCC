

import Header from "@/components/Header"
import RecipeCard from "@/components/RecipeCard"
import { GetRecipes } from "@/utils/GetRecipes"

export default async function Recipes() {
     
    const recipes = await GetRecipes()

    console.log(recipes)


    return (
        <section className="h-auto">
            <Header/>
            <div className="grid grid-cols-fit gap-6 p-6">
                {recipes.map((recipe, index) => {
                    return (
                        <RecipeCard key={index} recipe={recipe}/>
                    )
                })}
            </div>
        </section>
    )
}