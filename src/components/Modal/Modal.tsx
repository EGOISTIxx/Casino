/* eslint-disable react/display-name */
import React, { memo, PropsWithChildren } from 'react'
import { ModalProps } from 'antd'
import { SModal } from './SModal'

export interface IModalProps
  extends PropsWithChildren,
    ModalProps {}

export const Modal = memo((props: IModalProps) => {
  const { title, children, visible, ...otherProps } = props

  return (
    <SModal title={title} visible={visible} {...otherProps}>
      {children}
    </SModal>
  )
})
