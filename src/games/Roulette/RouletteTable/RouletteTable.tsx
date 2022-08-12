import React, { useMemo } from 'react'
import { nanoid } from 'nanoid'
import { ROULETTE_NUMBERS } from '../constants'
import {
  InnerBetNumbers,
  InnerNumbersWrapper,
  NumbersBetPart,
  OuterBlock,
  RouletteTableWrapper,
} from './SRouletteTable'

const RouletteTable = () => {
  return (
    <RouletteTableWrapper>
      <OuterBlock>0</OuterBlock>
      <InnerNumbersWrapper>
        {ROULETTE_NUMBERS.map((thirdPart) =>
          thirdPart.sort(
            (a, b) => a.betTableOrder - b.betTableOrder
          )
        ).map((thirdPart) => (
          <NumbersBetPart key={nanoid()}>
            {thirdPart.map((partNumbers) => (
              <InnerBetNumbers
                key={partNumbers.betTableOrder}
                color={partNumbers.color}>
                {partNumbers.number}
              </InnerBetNumbers>
            ))}
          </NumbersBetPart>
        ))}
      </InnerNumbersWrapper>
      <OuterBlock>2 to 1</OuterBlock>
      <OuterBlock>2 to 1</OuterBlock>
      <OuterBlock>2 to 1</OuterBlock>
      <OuterBlock></OuterBlock>
      <OuterBlock>1st. 12</OuterBlock>
      <OuterBlock>2st. 12</OuterBlock>
      <OuterBlock>3st. 12</OuterBlock>
      <OuterBlock></OuterBlock>
      <OuterBlock></OuterBlock>
      <OuterBlock>1 to 18</OuterBlock>
      <OuterBlock>EVEN</OuterBlock>
      <OuterBlock>RED</OuterBlock>
      <OuterBlock>BLACK</OuterBlock>
      <OuterBlock>ODD</OuterBlock>
      <OuterBlock>19 to 36</OuterBlock>
      <OuterBlock></OuterBlock>
    </RouletteTableWrapper>
  )
}

export default RouletteTable
