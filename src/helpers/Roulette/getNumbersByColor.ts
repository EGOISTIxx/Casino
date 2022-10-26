import {
  ROULETTE_NUMBERS,
  BLACK_COLOR,
  RED_COLOR,
} from '../../pages/Roulette/constants'

export const getNumbersByColor = (
  color: typeof RED_COLOR | typeof BLACK_COLOR
) => {
  return ROULETTE_NUMBERS.map((numbersPart) =>
    numbersPart
      .filter((numberInfo) => numberInfo.color === color)
      .map((numberInfo) => numberInfo.number)
  ).flat()
}
