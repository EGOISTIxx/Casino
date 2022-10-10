import React, { useRef } from 'react'

import RouletteTable from './RouletteTable/RouletteTable'
import { RouletteWrapper } from './SRoulette'

const Roulette = () => {
  return (
    <RouletteWrapper>
      <RouletteTable />
    </RouletteWrapper>
  )
}

export default Roulette
