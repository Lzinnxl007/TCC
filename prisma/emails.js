import { prisma } from "."

export async function SaveEmail(email, name) {
    await prisma.emails.create({
        data: {
            name,
            email,
        }
    })
}