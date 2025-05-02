import { InputHTMLAttributes } from 'react'

import { InputBase, InputContainer, InputLabel } from './Input.style'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelSize?: 'small' | 'medium' | 'large'
  hasError?: boolean
}

const Input = ({ label, labelSize, hasError, ...props }: InputProps) => {
  return (
    <InputContainer>
      {label && <InputLabel labelSize={labelSize}>{label}</InputLabel>}
      <InputBase hasError={hasError} {...props} />
    </InputContainer>
  )
}

export default Input
