import { prisma } from "."

export async function CreateUser(name, email, password) {
    await prisma.users.create({
        data: {
            name,
            email,
            password,
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