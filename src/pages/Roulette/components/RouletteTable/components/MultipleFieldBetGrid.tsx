/* eslint-disable prefer-const */
import React, { memo, useMemo } from 'react'
import { nanoid } from 'nanoid'
import { SHiddenBetBlock } from '../SRouletteTable'

const MultipleFieldBetGrid = (props: {
  onMouseEnter: (includedNumbers: number[]) => void
  onMouseLeave: () => void
  onClick: (
    number: number[] | undefined,
    bet: number
  ) => void
  bet: number
}) => {
  const { bet, onClick, onMouseEnter, onMouseLeave } = props

  const multipleBetField = useMemo(
    () => [
      [
        { includedNumbers: [0, 1, 2, 3] },
        { includedNumbers: [1, 2, 3] },
        { includedNumbers: [1, 2, 3, 4, 5, 6] },
        { includedNumbers: [4, 5, 6] },
        { includedNumbers: [4, 5, 6, 7, 8, 9] },
        { includedNumbers: [7, 8, 9] },
        { includedNumbers: [7, 8, 9, 10, 11, 12] },
        { includedNumbers: [10, 11, 12] },
        { includedNumbers: [10, 11, 12, 13, 14, 15] },
        { includedNumbers: [13, 14, 15] },
        { includedNumbers: [13, 14, 15, 16, 17, 18] },
        { includedNumbers: [16, 17, 18] },
        { includedNumbers: [16, 17, 18, 19, 20, 21] },
        { includedNumbers: [19, 20, 21] },
        { includedNumbers: [19, 20, 21, 22, 23, 24] },
        { includedNumbers: [22, 23, 24] },
        { includedNumbers: [22, 23, 24, 25, 26, 27] },
        { includedNumbers: [25, 26, 27] },
        { includedNumbers: [25, 26, 27, 28, 29, 30] },
        { includedNumbers: [28, 29, 30] },
        { includedNumbers: [28, 29, 30, 31, 32, 33] },
        { includedNumbers: [31, 32, 33] },
        { includedNumbers: [31, 32, 33, 34, 35, 36] },
        { includedNumbers: [34, 35, 36] },
      ],
      [
        { includedNumbers: [0, 3] },
        { includedNumbers: [3, 6] },
        { includedNumbers: [6, 9] },
        { includedNumbers: [9, 12] },
        { includedNumbers: [12, 15] },
        { includedNumbers: [15, 18] },
        { includedNumbers: [18, 21] },
        { includedNumbers: [21, 24] },
        { includedNumbers: [24, 27] },
        { includedNumbers: [27, 30] },
        { includedNumbers: [30, 33] },
        { includedNumbers: [33, 36] },
      ],
      [
        { includedNumbers: [0, 2, 3] },
        { includedNumbers: [2, 3] },
        { includedNumbers: [2, 3, 5, 6] },
        { includedNumbers: [5, 6] },
        { includedNumbers: [5, 6, 8, 9] },
        { includedNumbers: [8, 9] },
        { includedNumbers: [8, 9, 11, 12] },
        { includedNumbers: [11, 12] },
        { includedNumbers: [11, 12, 14, 15] },
        { includedNumbers: [14, 15] },
        { includedNumbers: [14, 15, 17, 18] },
        { includedNumbers: [17, 18] },
        { includedNumbers: [17, 18, 20, 21] },
        { includedNumbers: [20, 21] },
        { includedNumbers: [20, 21, 23, 24] },
        { includedNumbers: [23, 24] },
        { includedNumbers: [23, 24, 26, 27] },
        { includedNumbers: [26, 27] },
        { includedNumbers: [26, 27, 29, 30] },
        { includedNumbers: [29, 30] },
        { includedNumbers: [29, 30, 32, 33] },
        { includedNumbers: [32, 33] },
        { includedNumbers: [32, 33, 35, 36] },
        { includedNumbers: [32, 36] },
      ],
      [
        { includedNumbers: [0, 2] },
        { includedNumbers: [2, 5] },
        { includedNumbers: [5, 8] },
        { includedNumbers: [8, 11] },
        { includedNumbers: [11, 14] },
        { includedNumbers: [14, 17] },
        { includedNumbers: [17, 20] },
        { includedNumbers: [20, 23] },
        { includedNumbers: [23, 26] },
        { includedNumbers: [26, 29] },
        { includedNumbers: [29, 32] },
        { includedNumbers: [32, 35] },
      ],
      [
        { includedNumbers: [0, 1, 2] },
        { includedNumbers: [1, 2] },
        { includedNumbers: [1, 2, 4, 5] },
        { includedNumbers: [4, 5] },
        { includedNumbers: [4, 5, 7, 8] },
        { includedNumbers: [7, 8] },
        { includedNumbers: [7, 8, 10, 11] },
        { includedNumbers: [10, 11] },
        { includedNumbers: [10, 11, 13, 14] },
        { includedNumbers: [13, 14] },
        { includedNumbers: [13, 14, 16, 17] },
        { includedNumbers: [16, 17] },
        { includedNumbers: [16, 17, 19, 20] },
        { includedNumbers: [19, 20] },
        { includedNumbers: [19, 20, 22, 23] },
        { includedNumbers: [22, 23] },
        { includedNumbers: [22, 23, 25, 26] },
        { includedNumbers: [25, 26] },
        { includedNumbers: [25, 26, 28, 29] },
        { includedNumbers: [28, 29] },
        { includedNumbers: [28, 29, 31, 32] },
        { includedNumbers: [31, 32] },
        { includedNumbers: [31, 32, 34, 35] },
        { includedNumbers: [34, 35] },
      ],
      [
        { includedNumbers: [0, 1] },
        { includedNumbers: [1, 4] },
        { includedNumbers: [4, 7] },
        { includedNumbers: [7, 10] },
        { includedNumbers: [10, 13] },
        { includedNumbers: [13, 16] },
        { includedNumbers: [16, 19] },
        { includedNumbers: [19, 22] },
        { includedNumbers: [22, 25] },
        { includedNumbers: [25, 28] },
        { includedNumbers: [28, 31] },
        { includedNumbers: [31, 34] },
      ],
    ],
    []
  )

  return (
    <>
      {multipleBetField.map(
        (numbers, multipleBetFieldIndex) => (
          <React.Fragment key={nanoid()}>
            {numbers.map(({ includedNumbers }, index) => {
              const rowWidth = 733 / numbers.length
              const colHeight =
                193.5 / multipleBetField.length

              const leftPosition = index * rowWidth
              const topPosition =
                multipleBetFieldIndex * colHeight

              return (
                <SHiddenBetBlock
                  key={nanoid()}
                  topPosition={topPosition}
                  leftPosition={leftPosition}
                  onClick={() =>
                    onClick(includedNumbers, bet)
                  }
                  onMouseEnter={() =>
                    onMouseEnter(includedNumbers)
                  }
                  onMouseLeave={onMouseLeave}
                />
              )
            })}
          </React.Fragment>
        )
      )}
    </>
  )
}

export default memo(MultipleFieldBetGrid)
