import { spoonacularApi } from './config'
import recipesData from '../mock/recipes.json'

export const getRecipes = async () => {
  const response = await spoonacularApi
    .get('/recipes/complexSearch', {
      params: {
        cuisine: 'German',
      },
    })
    .then(response => response.data)

  return response
}

export const getMockRecipes = () => {
  const data = recipesData

  return data
}
