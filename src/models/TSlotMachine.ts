export type TSlotMachine = {
  title: string
  description: string
  bestJackpot: string
  type: 'card' | 'slots'
  totalPlayed: number
  items: {
    images: {
      title: string
      imageUrl: string
    }[]
    symbols: {
      title: string
      imageUrl: string
    }[]
  }
}
