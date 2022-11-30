import React from 'react'
import { Table, Modal, Spin } from './components'
import { RouletteProvider } from './context/RouletteContext'
import { RouletteWrapper } from './SRoulette'

const Roulette = () => {
  return (
    <RouletteWrapper>
      <RouletteProvider>
        <Table />
        <Spin />
        <Modal />
      </RouletteProvider>
    </RouletteWrapper>
  )
}

export default Roulette
