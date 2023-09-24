'use server'

import { SaveEmail } from "../../prisma/emails"

export async function SaveEmailAction(email) {
    await SaveEmail(email)
}