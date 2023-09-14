import { prisma } from "."

export async function CreateComment(name, comment, recipeId) {
    await prisma.Comments.create({
        data: {
            name,
            comment,
            recipeId
        }
    })
}

export async function GetComments() {
    const comments = await prisma.Comments.findMany()
    
    return comments
}