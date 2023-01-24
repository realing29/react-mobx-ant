import { IPost } from '../types/types'
import { Store } from './store'

export const post = new Store<IPost>('/posts?_limit=5')
