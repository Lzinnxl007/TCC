'use client'

import Recipe from "@/components/Recipe"
import Header from "@/components/Header"
import Share from "@/components/Share"
import { usePathname } from "next/navigation"
export default function ViewRecipe() {

   const path = usePathname()

   const query = path.split('/receita/')[1]

    return (
        <section>
            <Header/>
            <Share param={query}/>
            <Recipe />
        </section>
    )
}