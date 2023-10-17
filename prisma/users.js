import { prisma } from "."

export async function CreateUser(name, email, password) {
    await prisma.users.create({
        data: {
            name,
            email,
            password,
            photo: '',
            favorite_recipes: '[]',
            imc: '[]'
        }
    })
}

export async function Login(email) {
    return await prisma.users.findFirst({
        where: {
            email
        }
    })
}

export async function UploadProfileImage(id, url) {
    await prisma.users.update({
        where: {
            id: id
        },
        data: {
            photo: url
        }
    })
}

export async function GetUser(id) {
    return await prisma.users.findFirst({
        where: {
            id
        },
    })
}

export async function AddFavoriteRecipe(id, recipes) {
    await prisma.users.update({
        where: {
            id,
        }, 
        data: {
            favorite_recipes: recipes
        }
    })
}

export async function GetFavoriteRecipes(id) {
    return await prisma.users.findFirst({
        where: {
            id,
        },
    })
}

export async function RemoveFavoritedRecipe(id, recipes) {
    await prisma.users.update({
        where: {
            id,
        },
        data: {
            favorite_recipes: recipes
        }
    })
}

