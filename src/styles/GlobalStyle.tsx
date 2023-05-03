import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    * {
      margin: 0;
    }

    html,
    body,
    #__next {
      height: 100%;
      overflow-x: hidden;
    }

    body {
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      background-color: ${theme.color.white};

      position: relative;
    }

    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    button {
      background: transparent;
      border: 0;
      padding: 0;
      cursor: pointer;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
    }

    #root,
    #__next {
      isolation: isolate;
    }
  `}
`
