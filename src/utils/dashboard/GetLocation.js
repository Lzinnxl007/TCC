'use server'

export const getLocationFromIP = async () => {
    try {
      const response = await fetch('http://ip-api.com/json/')
      if (!response.ok) {
        throw new Error('Erro ao obter a localização')
      }
      const location = await response.json()
      return location
    } catch (error) {
      console.error('Erro ao obter a localização:', error)
      return null
    }
  }
  