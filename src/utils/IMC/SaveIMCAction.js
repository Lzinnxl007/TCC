'use server'

import { SaveIMC } from "../../../prisma/imc"

export async function SaveIMCAction(id, imc) {
    await SaveIMC(id, imc)
}