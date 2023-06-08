import styled, { css } from 'styled-components/native'

export const globalPaddingSide = 20;

export const CSSThemeText = css`
  color: ${(props) => props.theme.colors.text};
`
export const StyledTextTheme = styled.Text`
  ${CSSThemeText}
`
