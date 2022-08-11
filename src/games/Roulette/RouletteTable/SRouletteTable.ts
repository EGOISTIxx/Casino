import styled from 'styled-components'

export const RouletteTableWrapper = styled.div`
  background: #00b894;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    '. . . . . . . . . . . . . .'
    '. . . . . . . . . . . . . .'
    '. . . . . . . . . . . . . .'
    '. . . . . . . . . . . . . .'
    '. . . . . . . . . . . . . .';
`

export const OuterBlock = styled.div`
  color: #ffffff;
  padding: 1rem;
  border: 1px solid #ffeaa7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.25rem;

  &:nth-child(1) {
    grid-row: 1 / 4;
    font-size: 3rem;
  }

  &:nth-child(7) {
    grid-column: 2 / 6;
  }

  &:nth-child(8) {
    grid-column: 6 / 10;
  }

  &:nth-child(9) {
    grid-column: 10 / 14;
  }

  &:nth-child(12) {
    grid-column: 2 / 4;
  }

  &:nth-child(13) {
    grid-column: 4 / 6;
  }

  &:nth-child(14) {
    grid-column: 6 / 8;
    background: #ff0000;
  }

  &:nth-child(15) {
    grid-column: 8 / 10;
    background: #000000;
  }

  &:nth-child(16) {
    grid-column: 10 / 12;
  }

  &:nth-child(17) {
    grid-column: 12 / 14;
  }

  &:nth-child(6),
  &:nth-child(10),
  &:nth-child(11),
  &:nth-child(18) {
    border: none;
  }
`

export const InnerNumbersWrapper = styled.div`
  display: grid;
  grid-row: 1 / 4;
  grid-column: 2 / 14;
  grid-auto-flow: column;
`

export const InnerBetNumbers = styled.div`
  border: 1px solid #ffbe76;
  color: #f9ca24;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.25rem;
`

export const NumbersBetPart = styled.div`
  border-right: 2px solid #ffffff;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);

  &:last-child {
    border: none;
  }
`
