import React, { useContext } from 'react'
import { RouletteSpinWrapper } from './SRouletteSpin'
import { BLACK_COLOR, RED_COLOR } from '../../constants'
import { Button } from '../../../../components/UI/Button/Button'
import { Wheel } from '../../../../components/Wheel'
import { RouletteContext } from '../../context/RouletteContext'

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
  const context = useContext(RouletteContext)

  if (!context) return <div>Получение контекста</div>

  const { 
    handleClickSpin,
    isSpin,
    prizeNumber,
    stopSpinnig,
    wheelNumbersWithZero,
  } = context

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
