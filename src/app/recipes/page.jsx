
import Header from "@/components/Header"
import SliderRecipe from "@/components/SliderRecipe"
import { GetRecipes } from "@/utils/GetRecipes"

export default async function Recipes() {
     
    const recipes = await GetRecipes()


    return (
        <section>
            <Header/>
            <SliderRecipe recipe={recipes}/>
        </section>
    )
}