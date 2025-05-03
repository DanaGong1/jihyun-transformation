import styled from '@emotion/styled'

import { InputProps } from './Input'

export const InputContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
`

export const InputLabel = styled.label<{ labelSize?: 'small' | 'medium' | 'large' }>`
  flex-shrink: 0;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text};
  width: ${(props) => props.theme.labelSizes[props.labelSize || 'medium']};
  margin-top: 6px;
`

export const InputBaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const InputBase = styled.input<InputProps>`
  flex-grow: 1;
  padding: 6px 8px;
  border: 1px solid
    ${(props) => (props.hasError ? props.theme.colors.error : props.theme.colors.borderColor)};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSizes.small};
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.inputFocusBorderColor};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  appearance: none;
`

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.small};
`
