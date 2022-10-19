import { useMemo } from 'react'
import { ROULETTE_NUMBERS } from '../pages/Roulette/constants'

type TSortNumber = 'table' | 'wheel'

export const useOrderRoulette = (type: TSortNumber) => {
  const sortedNumbers = useMemo(() => {
    switch (type) {
      case 'table':
        return ROULETTE_NUMBERS.map((thirdPart) =>
          thirdPart.sort(
            (a, b) => a.betTableOrder - b.betTableOrder
          )
        )
      case 'wheel':
        return ROULETTE_NUMBERS.flat().sort(
          (a, b) => a.wheelOrder - b.wheelOrder
        )

      default:
        return ROULETTE_NUMBERS
    }
  }, [type])

  return sortedNumbers
}
