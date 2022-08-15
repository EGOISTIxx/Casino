import { ROULETTE_NUMBERS } from '../../games/Roulette/constants'

export const getNumbersByColor = (
  color: '#FF0000' | '#000000'
) => {
  return ROULETTE_NUMBERS.map((numbersPart) =>
    numbersPart
      .filter((numberInfo) => numberInfo.color === color)
      .map((numberInfo) => numberInfo.number)
  ).flat()
}
