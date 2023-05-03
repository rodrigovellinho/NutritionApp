type ISearchRecipes = {
  id: number
  title: string
  image: string
  imageType: string
}

export interface IPageSearchRecipesProps {
  recipes: Array<ISearchRecipes>
}
