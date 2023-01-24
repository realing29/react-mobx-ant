import { IUser } from '../types/types'
import { Store } from './store'

export const user = new Store<IUser>('/users')
