'use server'

import { UploadProfileImage } from "../../../prisma/users"

export async function UploadProfileImageAction(id, url) {
    await UploadProfileImage(id, url)
}