import styled from '@emotion/styled'

import { ButtonProps } from './Button'

export const ButtonBase = styled.button<ButtonProps>`
  width: ${(props) => props.width || '100%'};
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  transition: background-color 0.2s ease;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.buttonActive};
  }
`
