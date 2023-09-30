'use server'

import { GetUser } from "../../prisma/users"
export async function GetUserAction(id) {
    return await GetUser(id)
}