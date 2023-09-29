'use server'

import { CreateUser } from "../../../prisma/users"

export async function CreateUserAction(name, email, password) {
    await CreateUser(name, email, password)
}