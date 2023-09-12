'use client'

import Recipe from "@/components/Recipe"
import Header from "@/components/Header"
import Share from "@/components/Share"
import { usePathname } from "next/navigation"
import { useSearchParams } from "next/navigation"
export default function ViewRecipe() {

   const path = usePathname()
   const searchParams = useSearchParams()

   const id = searchParams.get('id')

   const query = `${path.split('/receita/')[1]}?id=${id}`


    return (
        <section>
            <Header/>
            <Share param={query}/>
            <Recipe />
        </section>
    )
}