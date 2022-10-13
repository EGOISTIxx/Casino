import styled from 'styled-components'

export const RouletteSpinWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  margin: 1rem;
`

export const StyledDiv = styled.div<{
  color: string
  angle: number
  width: number
}>`
  text-align: center;
  left: 50%;
  transform-origin: 50% 100%;
  position: absolute;
  width: ${(props) => props.width}px;
  height: 200px;
  color: #ffffff;
  transform: rotate(${(props) => props.angle}deg);
  filter: drop-shadow(0 0 1px #000);
  background: linear-gradient(
        to right top,
        transparent 50%,
        ${(props) => props.color} 50%
      )
      left / 50% 100% no-repeat,
    linear-gradient(
        to left top,
        transparent 50%,
        ${(props) => props.color} 50%
      )
      right / 50% 100% no-repeat;
`
