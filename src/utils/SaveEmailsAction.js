'use server'

import { SaveEmail } from "../../prisma/emails"

export async function SaveEmailAction(email, name) {
    await SaveEmail(email, name)
}