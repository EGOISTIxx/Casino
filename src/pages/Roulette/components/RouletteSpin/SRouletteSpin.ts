import styled, { keyframes, css } from 'styled-components'

type TSpinProps = {
  color: string
  angle: number
  width: number
}

export const RouletteSpinWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  margin: 1rem;
`
