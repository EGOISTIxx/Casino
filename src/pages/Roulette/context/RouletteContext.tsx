import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react'
import { useOrderRoulette } from '../../../hooks/useOrderRoulette'

export type TBetNumber = number[] | undefined

export interface IBets {
  betNumber: TBetNumber
  currentBet: number
}

export interface IRouletteContextValue {
  prizeNumber: number | undefined
  isSpin: boolean
  wheelNumbersWithZero:
    | {
        option: number
        style: { backgroundColor: string }
      }[]
    | any
  bets: IBets[] | []
  setBets: React.Dispatch<
    React.SetStateAction<IBets[] | []>
  >
  setPrizeNumber: React.Dispatch<
    React.SetStateAction<number | undefined>
  >
  handleClickSpin: () => void
  stopSpinnig: () => void
}

export const RouletteContext =
  createContext<IRouletteContextValue | null>(null)

export const RouletteProvider = (
  props: PropsWithChildren<object>
) => {
  const { children } = props

  const numbers = useOrderRoulette('wheel')

  const [isSpin, setIsSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState<
    number | undefined
  >(undefined)

  const [bets, setBets] = useState<IBets[] | []>([])

  const wheelNumbersWithZero = useMemo<
    | {
        option: number
        style: { backgroundColor: string }
      }[]
    | any
  >(
    () => [
      {
        option: 0,
        style: {
          backgroundColor: '#00B894',
        },
      },
      ...numbers,
    ],
    []
  )

  const handleClickSpin = useCallback(() => {
    const newPrizeNumber = Math.floor(
      Math.random() * wheelNumbersWithZero.length
    )
    setPrizeNumber(newPrizeNumber)
    setIsSpin(true)
  }, [wheelNumbersWithZero])

  const stopSpinnig = useCallback(() => {
    setIsSpin(false)
  }, [isSpin])

  const value: IRouletteContextValue = useMemo(
    () => ({
      isSpin,
      prizeNumber,
      handleClickSpin,
      stopSpinnig,
      wheelNumbersWithZero,
      bets,
      setPrizeNumber,
      setBets,
    }),
    [prizeNumber, handleClickSpin, stopSpinnig]
  )

  return (
    <RouletteContext.Provider value={value}>
      {children}
    </RouletteContext.Provider>
  )
}
