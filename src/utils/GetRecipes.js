export const GetRecipes = async() => {
  const response = await fetch('https://desperdicio-zero-api.vercel.app/api/recipes')

    const data = await response.json()

    console.log(data)
    
    return data
  }