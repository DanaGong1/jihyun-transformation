import { InputHTMLAttributes } from 'react'

import {
  ErrorMessage,
  InputBase,
  InputBaseContainer,
  InputContainer,
  InputLabel,
} from './Input.styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelSize?: 'small' | 'medium' | 'large'
  hasError?: boolean
  errorMessage?: string
}

const Input = ({ label, labelSize, hasError, errorMessage, ...props }: InputProps) => {
  return (
    <InputContainer>
      {label && <InputLabel labelSize={labelSize}>{label}</InputLabel>}
      <InputBaseContainer>
        <InputBase hasError={hasError} {...props} />
        {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </InputBaseContainer>
    </InputContainer>
  )
}

export default Input
