'use server'

import { RemoveFavoritedRecipe } from "../../../prisma/users"

export async function RemoveFavoritedRecipeAction(id, recipe) {
    await RemoveFavoritedRecipe(id, recipe)
}