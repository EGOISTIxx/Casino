export const getIncludedNumbers = (
  length = 1,
  initialNumber = 1
) => {
  return {
    getNumbers() {
      return [...Array(length)].map(
        (_, index) => initialNumber + index
      )
    },
    getEvenNumbers() {
      return this.getNumbers().filter(
        (number) => number % 2 === 0
      )
    },
    getOddNumbers() {
      return this.getNumbers().filter(
        (number) => number % 2 !== 0
      )
    },
  }
}
