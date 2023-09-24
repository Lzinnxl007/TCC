import { prisma } from "."

export async function CreateComment(name, comment, recipeId) {
    await prisma.comments.create({
        data: {
            name,
            comment,
            recipeId
        }
    })
}

export async function GetComments() {
    const comments = await prisma.comments.findMany()
    
    return comments
}