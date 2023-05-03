import { CardRecipe } from '@/components/CardRecipe'
import { IPageSearchRecipesProps } from '@/types/layout/serachRecipe'

import * as S from './styles'

export default function PageSearchRecipe({ recipes }: IPageSearchRecipesProps) {
  return (
    <>
      <S.Cards>
        {recipes.map(card => (
          <CardRecipe key={card.id} recipes={...recipes} />
        ))}
      </S.Cards>
    </>
  )
}
