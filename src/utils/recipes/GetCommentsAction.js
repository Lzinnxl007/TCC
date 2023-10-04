'use server'

import { GetComments } from "../../../prisma/comments"

export async function GetCommentsAction() {
   return await GetComments() 
}
