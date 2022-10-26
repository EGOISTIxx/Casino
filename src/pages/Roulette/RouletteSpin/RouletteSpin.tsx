import React, {
  useCallback,
  useMemo,
  useState,
} from 'react'
import { useOrderRoulette } from '../../../hooks/useOrderRoulette'
import { RouletteSpinWrapper } from './SRouletteSpin'
import { BLACK_COLOR, RED_COLOR } from '../constants'
import { Button } from '../../../components/UI/Button/Button'
import {
  Wheel,
  WheelDataType,
} from '../../../components/Wheel'

export type TWheelNumbers = {
  number: number
  color: string
  betTableOrder?: number
  wheelOrder?: number
}

const textColors = ['#ffffff']
const backgroundColors = [RED_COLOR, BLACK_COLOR]
const innerRadius = 40
const innerBorderWidth = 15
const textDistance = 85
const outerBorderWidth = 15
const radiusLineWidth = 2
const radiusLineColor = '#feca57'

const RouletteSpin = () => {
  const numbers = useOrderRoulette('wheel')

  const [isSpin, setIsSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)

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

  return (
    <>
      <RouletteSpinWrapper>
        <Wheel
          mustStartSpinning={isSpin}
          data={wheelNumbersWithZero}
          perpendicularText
          backgroundColors={backgroundColors}
          prizeNumber={prizeNumber}
          textColors={textColors}
          innerBorderWidth={innerBorderWidth}
          textDistance={textDistance}
          outerBorderWidth={outerBorderWidth}
          innerRadius={innerRadius}
          radiusLineWidth={radiusLineWidth}
          radiusLineColor={radiusLineColor}
          onStopSpinning={stopSpinnig}
        />
      </RouletteSpinWrapper>
      <Button type='primary' onClick={handleClickSpin}>
        Старт
      </Button>
    </>
  )
}

export default RouletteSpin
