import React, { useEffect, useMemo, useState } from 'react'
import { nanoid } from 'nanoid'
import { useOrderRoulette } from '../../../hooks/useOrderRoulette'
import {
  InnerCircle,
  InnerCircleBlock,
  RouletteSpinWrapper,
  StyledDiv,
} from './SRouletteSpin'
import { BLACK_COLOR, RED_COLOR } from '../constants'
import { getCircleData } from '../../../helpers/Roulette/getCircleData'
import { Button } from '../../../components/UI/Button/Button'

export type TWheelNumbers = {
  number: number
  color: string
  betTableOrder?: number
  wheelOrder?: number
}

const RouletteSpin = () => {
  const numbers = useOrderRoulette('wheel')

  const innerCirlceItems = [...Array(8)].map(
    (_, index: number) =>
      index % 2 ? BLACK_COLOR : RED_COLOR
  )

  const wheelNumbersWithZero = useMemo(
    () => [
      { number: 0, color: '#00B894' },
      ...numbers.flat(),
    ],
    []
  )

  return (
    <>
      <RouletteSpinWrapper>
        {wheelNumbersWithZero.map((wheelNumber, index) => {
          const { color, number } = wheelNumber

          const { angle, width } = getCircleData(
            200,
            37,
            index
          )

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
        <InnerCircle>
          {innerCirlceItems.map(
            (color: string, index: number) => {
              const { angle, width } = getCircleData(
                75,
                8,
                index
              )

              return (
                <>
                  <InnerCircleBlock
                    color={color}
                    angle={angle}
                    width={width + 3}
                  />
                </>
              )
            }
          )}
        </InnerCircle>
      </RouletteSpinWrapper>
      <Button>Старт</Button>
    </>
  )
}

export default RouletteSpin
