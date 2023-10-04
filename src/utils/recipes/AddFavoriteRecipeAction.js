'use server'

import { AddFavoriteRecipe } from "../../../prisma/users"

export async function AddFavoriteRecipeAction(id, recipe) {
    await AddFavoriteRecipe(id, recipe)
}