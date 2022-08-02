import {
  action,
  observable,
  makeAutoObservable,
} from 'mobx'

export class UserStore {
  constructor() {
    makeAutoObservable(this)
  }
}
