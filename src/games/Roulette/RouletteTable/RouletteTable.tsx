import React, {
  useCallback,
  useMemo,
  useState,
} from 'react'
import { nanoid } from 'nanoid'
import { ROULETTE_NUMBERS } from '../constants'
import {
  InnerBetNumbers,
  InnerNumbersWrapper,
  NumbersBetPart,
  OuterBlock,
  RouletteTableWrapper,
} from './SRouletteTable'
import { getIncludedNumbers } from '../../../helpers/Roulette/getIncludedNumber'
import { getNumbersByColor } from '../../../helpers/Roulette/getNumbersByColor'

const RouletteTable = () => {
  const [bets, setBets] = useState<
    {
      betNumber: number | number[] | undefined
      currentBet: number
    }[]
  >([])

  const [userBet, setUserBet] = useState(100)

  const betTableItems = useMemo(
    () => [
      {
        title: '2 to 1',
        includedNumber: [
          3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36,
        ],
      },
      {
        title: '2 to 1',
        includedNumber: [
          2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35,
        ],
      },
      {
        title: '2 to 1',
        includedNumber: [
          1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34,
        ],
      },
      { title: '' },
      {
        title: '1st. 12',
        includedNumber: getIncludedNumbers(12).getNumbers(),
      },
      {
        title: '2st. 12',
        includedNumber: getIncludedNumbers(
          12,
          13
        ).getNumbers(),
      },
      {
        title: '3st. 12',
        includedNumber: getIncludedNumbers(
          12,
          25
        ).getNumbers(),
      },
      { title: '' },
      { title: '' },
      {
        title: '1 to 18',
        includedNumber: getIncludedNumbers(18).getNumbers(),
      },
      {
        title: 'EVEN',
        includedNumber: getIncludedNumbers(
          36,
          1
        ).getEvenNumbers(),
      },
      {
        title: 'RED',
        includedNumber: getNumbersByColor('#FF0000'),
      },
      {
        title: 'BLACK',
        includedNumber: getNumbersByColor('#000000'),
      },
      {
        title: 'ODD',
        includedNumber: getIncludedNumbers(
          36,
          1
        ).getOddNumbers(),
      },
      {
        title: '19 to 36',
        includedNumber: getIncludedNumbers(
          18,
          19
        ).getNumbers(),
      },
      { title: '' },
    ],
    []
  )

  const handleClickBet = useCallback(
    (
      number: number | number[] | undefined,
      bet: number
    ) => {
      setBets((prevValue) => {
        if (
          prevValue.some(
            (elem) => elem.betNumber === number
          )
        ) {
          return prevValue.map((elem) =>
            elem.betNumber === number
              ? {
                  betNumber: elem.betNumber,
                  currentBet: elem.currentBet + bet,
                }
              : elem
          )
        }

        return [
          ...prevValue,
          { betNumber: number, currentBet: bet },
        ]
      })
    },
    [bets]
  )

  console.log(bets)

  return (
    <RouletteTableWrapper>
      <OuterBlock
        onClick={() => handleClickBet(0, userBet)}>
        0
      </OuterBlock>
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
                color={partNumbers.color}
                onClick={() =>
                  handleClickBet(
                    partNumbers.number,
                    userBet
                  )
                }>
                {partNumbers.number}
              </InnerBetNumbers>
            ))}
          </NumbersBetPart>
        ))}
      </InnerNumbersWrapper>
      {betTableItems.map((tableItem) => (
        <OuterBlock
          key={nanoid()}
          onClick={() =>
            handleClickBet(
              tableItem?.includedNumber,
              userBet
            )
          }>
          {tableItem.title}
        </OuterBlock>
      ))}
    </RouletteTableWrapper>
  )
}

export default RouletteTable
