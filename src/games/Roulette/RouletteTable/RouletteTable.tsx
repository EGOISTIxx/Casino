import React, { useMemo } from 'react'
import {
  InnerBetNumbers,
  InnerNumbersWrapper,
  NumbersBetPart,
  OuterBlock,
  RouletteTableWrapper,
} from './SRouletteTable'

const RouletteTable = () => {
  const innerNumbers = useMemo(() => {
    const matrixArray = [...Array(36)]
      .map((_, index) => ++index)
      .map((_, index, sourcedArray) =>
        sourcedArray
          .slice(index * 3, index * 3 + 3)
          .reverse()
      )
      .slice(0, 12)
      .map((_, index, sourcedArray) =>
        sourcedArray.slice(index * 4, index * 4 + 4)
      )
      .slice(0, 3)

    return matrixArray.map((matrix, _) =>
      matrix
        .map((col, i) => matrix.map((row) => row[i]))
        .splice(0, 3)
    )
  }, [])

  return (
    <RouletteTableWrapper>
      <OuterBlock>0</OuterBlock>
      <InnerNumbersWrapper>
        {innerNumbers.map((numberPart) => {
          return (
            <NumbersBetPart>
              {numberPart.map((thirdPart) => {
                return (
                  <>
                    {thirdPart.map((number) => (
                      <InnerBetNumbers>
                        {number}
                      </InnerBetNumbers>
                    ))}
                  </>
                )
              })}
            </NumbersBetPart>
          )
        })}
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
