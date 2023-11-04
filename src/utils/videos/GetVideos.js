'use server'

export async function GetVideos() {
    try {
        const response = await fetch('http://desperdicio-zero-api.vercel.app/api/videos')
        const data = await response.json()
        return data
    } catch(error) {
        console.log(error)
        return null
    }
}