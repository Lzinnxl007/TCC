'use server'

import { GetFavoriteRecipes } from "../../../prisma/users"

export async function GetFavoriteRecipesAction(id) {
    return await GetFavoriteRecipes(id)
}