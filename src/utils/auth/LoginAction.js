'use server'

import { Login } from "../../../prisma/users"

export async function LoginAction(email) {
    return await Login(email)
}
