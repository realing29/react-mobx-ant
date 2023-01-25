import { IUser } from '../types/types'
import { CreateStore } from './createStore'

export const user = new CreateStore<IUser>('/users')
