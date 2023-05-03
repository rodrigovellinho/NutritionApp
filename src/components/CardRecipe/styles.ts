import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 345px;
    height: 454px;
    background-color: ${theme.color.lightBlue};
  `}
`
