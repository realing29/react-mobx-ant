import { IPost } from '../types/types'
import { CreateStore } from './createStore'

export const post = new CreateStore<IPost>('/posts')
