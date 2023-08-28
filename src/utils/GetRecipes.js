export const GetRecipes = async() => {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=1&apiKey=${process.env.RECIPES_API_KEY}`)

    const data = await response.json()
    
    return data
  }