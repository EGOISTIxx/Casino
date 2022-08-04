import {
  action,
  observable,
  makeAutoObservable,
} from 'mobx'
import { TUser } from '../../models/TUser'

export default class UserStore {
  @observable user = {} as Partial<TUser>
  @observable isAuth = false
  @observable isLoading = false

  constructor() {
    makeAutoObservable(this)
  }

  setIsAuth(bool: boolean) {
    this.isAuth = bool
  }

  setUser(user: Partial<TUser>) {
    this.user = user
  }

  setIsLoading(bool: boolean) {
    this.isLoading = bool
  }

  async login(email: string, password: string) {
    try {
      localStorage.setItem('token', `${email}_${password}`)
      this.setIsAuth(true)
      this.setUser({ email, password })
    } catch (e: Error | unknown) {
      console.log(e)
    }
  }
}
