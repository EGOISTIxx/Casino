import React, { useRef } from 'react'
import RouletteSpin from './RouletteSpin/RouletteSpin'

import RouletteTable from './RouletteTable/RouletteTable'
import { RouletteWrapper } from './SRoulette'

const Roulette = () => {
  return (
    <RouletteWrapper>
      <RouletteTable />
      <RouletteSpin />
    </RouletteWrapper>
  )
}

export default Roulette
