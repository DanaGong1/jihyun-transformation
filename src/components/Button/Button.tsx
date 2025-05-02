import { ButtonHTMLAttributes, ReactNode } from 'react'

import { ButtonBase } from './Button.style'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  width?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ children, width, type = 'button', ...props }: ButtonProps) => {
  return (
    <ButtonBase width={width} type={type} {...props}>
      {children}
    </ButtonBase>
  )
}

export default Button
