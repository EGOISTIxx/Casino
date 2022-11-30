import React, {
  useCallback,
  useContext,
  useMemo,
} from 'react'
import { isNumber, isUndefined } from 'lodash'
import { Modal } from '../../../../components/Modal/Modal'
import {
  IRouletteContextValue,
  RouletteContext,
} from '../../context/RouletteContext'

const RouletteModal = () => {
  const {
    isSpin,
    prizeNumber,
    setPrizeNumber,
    bets,
    setBets,
    wheelNumbersWithZero,
  } = useContext(RouletteContext) as IRouletteContextValue

  const modalVisible = useMemo(
    () => !isSpin && !!prizeNumber && !!bets.length,
    [isSpin, prizeNumber, bets]
  )

  const handleCloseModal = useCallback(() => {
    setPrizeNumber(undefined)
    setBets([])
  }, [])

  const modalTitle = useMemo(() => {
    const isWinning = bets.filter((numbersPart) => {
      const { betNumber } = numbersPart

      if (isUndefined(betNumber)) return
      if (isNumber(betNumber)) return

      return betNumber.includes(
        wheelNumbersWithZero.at(prizeNumber).option
      )
    }).length

    return isWinning ? 'Вы выиграли!' : 'Вы проиграли!'
  }, [bets])

  const modalContent = useMemo(() => {
    if (!prizeNumber) return

    const winningBets = bets.filter(
      ({ betNumber }) =>
        betNumber?.includes(prizeNumber) && betNumber
    )

    const winningSumm = winningBets.reduce((acc, curr) => {
      if (!curr.betNumber) return acc

      const payoutRatio =
        (36 - curr.betNumber.length) / curr.betNumber.length

      return (
        payoutRatio * curr.currentBet +
        curr.currentBet +
        acc
      )
    }, 0)

    return <div>Вы выиграли {winningSumm || 0} </div>
  }, [bets, prizeNumber])

  return (
    <Modal
      title={modalTitle}
      visible={modalVisible}
      onOk={handleCloseModal}
      onCancel={handleCloseModal}>
      {modalContent}
    </Modal>
  )
}

export default RouletteModal
