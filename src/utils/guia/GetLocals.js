'use server'

export async function GetLocals(latitude, longitude, radius, type, keyword) {
    try {
        const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&keyword=${keyword}&key=${process.env.GOOGLE_CLOUD_API_KEY}`
        const response = await fetch(apiUrl)
    
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`)
        }
        const data = await response.json()
        return data.results
        
      } catch (error) {
        console.log('Error fetching places:', error)
        
      }

}