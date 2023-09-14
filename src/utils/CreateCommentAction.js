'use server'

import { CreateComment } from "../../prisma/comments"

export async function CreateCommentAction(name, comment, recipeId) {
    await CreateComment(name, comment, recipeId)
}