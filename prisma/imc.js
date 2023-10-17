import { prisma } from "."

export async function SaveIMC(id, imc) {
    await prisma.users.update({
        where: {
            id,
        },
        data: {
            imc,
        }
    })
}

export async function GetIMC(id) {
    const user = await prisma.users.findFirst({
        where: {
            id,
        }
    })
    return user.imc
}