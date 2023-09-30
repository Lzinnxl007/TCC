import { prisma } from "."

export async function CreateUser(name, email, password) {
    await prisma.users.create({
        data: {
            name,
            email,
            password,
            photo: ''
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