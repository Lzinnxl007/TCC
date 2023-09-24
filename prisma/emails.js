import { prisma } from "."

export async function SaveEmail(email) {
    await prisma.emails.create({
        data: {
            email,
        }
    })
}