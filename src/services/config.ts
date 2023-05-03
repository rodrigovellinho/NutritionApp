import axios from 'axios'

export const spoonacularApi = axios.create({
  baseURL: 'https://api.spoonacular.com/',
  headers: { 'x-api-key': 'cd3998323308406dbd197d1befaf1544' },
})
