import {} from 'styled-components'

interface IDSColor {
  white: '#fff'
  lightest: '#f1dac4'
  lightPurple: '#a69cac'
  lightBlue: '#474973'
  blue: '#161b33'
  darkBlue: '#0d0c1d'
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: IDSColor
  }
}
