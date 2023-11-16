'use server'

export const getLocationFromIP = async () => {
  try {
    const response = await fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.GOOGLE_CLOUD_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ considerIp: true }), 
    })

    if (!response.ok) {
      throw new Error('Erro ao obter a localização')
    }

    const data = await response.json()

    return data.location
    
  } catch (error) {
    console.log('Erro na requisição:', error)
  }
}

  