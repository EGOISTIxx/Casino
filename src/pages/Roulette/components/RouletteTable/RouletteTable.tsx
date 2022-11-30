import React, {
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { nanoid } from 'nanoid'
import {
  InnerBetNumber,
  InnerNumbersWrapper,
  NumbersBetPart,
  OuterBlock,
  RouletteTableWrapper,
} from './SRouletteTable'
import { getIncludedNumbers } from '../../../../helpers/Roulette/getIncludedNumber'
import { getNumbersByColor } from '../../../../helpers/Roulette/getNumbersByColor'
import { useOrderRoulette } from '../../../../hooks/useOrderRoulette'
import { TRouletteNumbers } from '../../../../types/Roulette'
import { BetGrid } from './components'
import { debounce, isNumber } from 'lodash'
import {
  RouletteContext,
  IRouletteContextValue,
  TBetNumber,
} from '../../context/RouletteContext'

export type TTableItems = {
  title: string
  includedNumber?: number[] | undefined
}

const RouletteTable = () => {
  const { setBets, bets } = useContext(
    RouletteContext
  ) as IRouletteContextValue

  const tableNumbers = useOrderRoulette('table')

  const [userBet, setUserBet] = useState(100)

  const [activeBetNumbers, setActiveBetNumbers] = useState<
    number[] | undefined
  >([])

  const betTableItems: TTableItems[] = useMemo(
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
        title: '2nd. 12',
        includedNumber: getIncludedNumbers(
          12,
          13
        ).getNumbers(),
      },
      {
        title: '3rd. 12',
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
    (number: TBetNumber, bet: number) => {
      setBets((prevValue) => {
        if (
          prevValue.some(
            ({ betNumber }) =>
              betNumber && betNumber === number
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
          {
            betNumber: number,
            currentBet: bet,
          },
        ]
      })
    },
    []
  )

  const handleAddActiveBetNumbers = (
    includedNumbers: number[]
  ) => {
    setActiveBetNumbers(includedNumbers)
  }

  const debouncedHandleAddActiveBetNumbers = useMemo(
    () => debounce(handleAddActiveBetNumbers, 1500),
    []
  )

  const handleRemoveActiveBetNumbers = useCallback(() => {
    debouncedHandleAddActiveBetNumbers.cancel()
    if (!activeBetNumbers?.length) return
    setActiveBetNumbers([])
  }, [activeBetNumbers, debouncedHandleAddActiveBetNumbers])

  return (
    <RouletteTableWrapper>
      <OuterBlock
        onClick={() => handleClickBet([0], userBet)}
        number={0}
        activeBetNumbers={activeBetNumbers}>
        0
      </OuterBlock>
      <InnerNumbersWrapper>
        {tableNumbers.map((thirdPart) => (
          <NumbersBetPart key={nanoid()}>
            {Array.isArray(thirdPart) &&
              thirdPart.map(
                (partNumbers: TRouletteNumbers) => {
                  const { betTableOrder, color, number } =
                    partNumbers

                  return (
                    <InnerBetNumber
                      key={betTableOrder}
                      color={color}
                      number={number}
                      outerPartNumbers={activeBetNumbers}
                      onClick={() =>
                        handleClickBet([number], userBet)
                      }>
                      {number}
                    </InnerBetNumber>
                  )
                }
              )}
          </NumbersBetPart>
        ))}
        <BetGrid
          onMouseEnter={debouncedHandleAddActiveBetNumbers}
          onMouseLeave={handleRemoveActiveBetNumbers}
          onClick={handleClickBet}
          bet={userBet}
        />
      </InnerNumbersWrapper>
      {betTableItems.map(({ includedNumber, title }) => (
        <OuterBlock
          key={nanoid()}
          onClick={() =>
            handleClickBet(
              includedNumber && includedNumber,
              userBet
            )
          }
          onMouseEnter={() =>
            debouncedHandleAddActiveBetNumbers(
              includedNumber || []
            )
          }
          onMouseLeave={handleRemoveActiveBetNumbers}>
          {title}
        </OuterBlock>
      ))}
    </RouletteTableWrapper>
  )
}

export default RouletteTable
