import React, { useEffect, useMemo, useState } from 'react'
import { nanoid } from 'nanoid'
import { useOrderRoulette } from '../../../hooks/useOrderRoulette'
import {
  RouletteSpinWrapper,
  StyledDiv,
} from './SRouletteSpin'

export type TWheelNumbers = {
  number: number
  color: string
  betTableOrder?: number
  wheelOrder?: number
}

const RouletteSpin = () => {
  const numbers = useOrderRoulette('wheel')

  const wheelNumbersWithZero = useMemo(
    () => [
      { number: 0, color: '#00B894' },
      ...numbers.flat(),
    ],
    []
  )

  return (
    <RouletteSpinWrapper>
      {wheelNumbersWithZero.map((wheelNumber, index) => {
        const { color, number } = wheelNumber

        const angle = (360 / 37) * index
        const defaultAngle = (2 * Math.PI) / 37
        const radius = 200

        const width =
          2 * radius * Math.sin(defaultAngle / 2)

        return (
          <StyledDiv
            key={nanoid()}
            angle={angle}
            width={width}
            color={color}>
            {number}
          </StyledDiv>
        )
      })}
    </RouletteSpinWrapper>
  )
}

export default RouletteSpin
