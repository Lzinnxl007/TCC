

export async function RemoveBg(url) {

    const response = await fetch(`https://api.remove.bg/v1.0/removebg?image_url=${url}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': process.env.REMOVEBG_API_KEY,
        },
    })

    const data = await response.json()
    const outputImageUrl = URL.createObjectURL(data)

    return outputImageUrl
}