'use server'

export async function GetVideos() {
    try {
        const response = await fetch('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyA5gq8aNBVqQZHfnkiTNONsuvBLUgKrGxg&part=snippet&id=eAeon4jt7Cw')
        const data = await response.json()
        return data
    } catch(error) {
        console.log(error)
        return null
    }
}