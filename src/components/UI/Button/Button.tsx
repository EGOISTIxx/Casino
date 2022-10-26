import { ButtonProps } from 'antd'
import React, { PropsWithChildren, ReactNode } from 'react'
import { StyledButton } from './SButton'

export interface IButtonProps extends ButtonProps {
  children: ReactNode
}

export const Button: React.FC<IButtonProps> = (props) => {
  const { children, ...otherProps } = props

  return (
    <StyledButton {...otherProps}>{children}</StyledButton>
  )
}
