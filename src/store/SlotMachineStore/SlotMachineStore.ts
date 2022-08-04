import {
  action,
  observable,
  makeAutoObservable,
} from 'mobx'
import { TSlotMachine } from '../../models/TSlotMachine'

export default class SlotMachineStore {
  @observable currentGame = {} as Partial<TSlotMachine>
  @observable allGames = [] as Partial<TSlotMachine[]>

  constructor() {
    makeAutoObservable(this)
  }

  setCurrentGame(currentGame: Partial<TSlotMachine>) {
    this.currentGame = currentGame
  }

  setAllGames(allGames: Partial<TSlotMachine[]>) {
    this.allGames = allGames
  }

  async getAllGames() {
    try {
      this.setAllGames([])
    } catch (e) {
      console.log(e)
    }
  }

  async getCertainGame(id: string) {
    try {
      this.setCurrentGame({})
    } catch (e) {
      console.log(e)
    }
  }
}
