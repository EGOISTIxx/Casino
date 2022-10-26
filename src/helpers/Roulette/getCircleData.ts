export const getCircleData = (
  radius: number,
  parts: number,
  index: number
) => {
  const angle = (360 / parts) * index
  const defaultAngle = (2 * Math.PI) / parts

  const width = 2 * radius * Math.sin(defaultAngle / 2)

  return {
    angle,
    width,
  }
}
