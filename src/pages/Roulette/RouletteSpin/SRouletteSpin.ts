import styled, { keyframes, css } from 'styled-components'

type TSpinProps = {
  color: string
  angle: number
  width: number
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const RouletteSpinWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  margin: 1rem;
  animation: ${rotate} 20s linear infinite;

  &::before {
    content: '';
    z-index: 10;
    border: 5px solid #ffffff;
    width: 300px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: transparent;
  }
`

export const StyledDiv = styled.div<TSpinProps>`
  text-align: center;
  left: 46%;
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

export const InnerCircle = styled.div`
  z-index: 11;
  border: 5px solid #ffffff;
  width: 150px;
  height: 150px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &::before {
    content: '';
    border-radius: 50%;
    height: 15px;
    width: 15px;
    background: #ffffff;
    position: absolute;
    z-index: 15;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

export const InnerCircleBlock = styled.div<TSpinProps>`
  left: 29%;
  top: -4%;
  position: absolute;
  width: ${(props) => props.width}px;
  height: 75px;
  transform-origin: 50% 100%;
  transform: rotate(${(props) => props.angle}deg);
  filter: drop-shadow(0 0 1px #000);
  background: linear-gradient(
        to right top,
        transparent 49%,
        ${(props) => props.color} 50%
      )
      left / 51% 100% no-repeat,
    linear-gradient(
        to left top,
        transparent 49%,
        ${(props) => props.color} 50%
      )
      right / 51% 100% no-repeat;
`
