'use client'

import { useSearchParams } from "next/navigation"
import Recipe from "@/components/Recipe"
import Header from "@/components/Header"
export default function ViewRecipe() {

    const searchParams = useSearchParams()

    const recipeId = searchParams.get('id')

    return (
        <section>
            <Header/>
            <Recipe id={recipeId}/>
        </section>
    )
}