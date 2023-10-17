'use server'

import { GetIMC } from "../../../prisma/imc"

export async function GetIMCAction(id) {
    return GetIMC(id)
}