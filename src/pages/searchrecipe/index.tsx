import SearchRecipeLayout from '@/layout/pagesearchrecipe'
import { getMockRecipes } from '@/services/getRecipes'
import { MainTemplate } from '@/template/MainTemplate'
import { IPageSearchRecipesProps } from '@/types/layout/serachRecipe'

import { GetServerSideProps } from 'next'

const SearchRecipe = ({ recipes }: IPageSearchRecipesProps) => {
  return (
    <MainTemplate>
      <SearchRecipeLayout recipes={recipes} />
    </MainTemplate>
  )
}

export default SearchRecipe

export const getStaticProps: GetServerSideProps = async () => {
  /*  const recipes = await getRecipes() */

  const recipes = getMockRecipes()

  return {
    props: {
      recipes,
    },
  }
}
