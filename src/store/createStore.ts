import { makeAutoObservable } from 'mobx'
import { httpService } from '../services/http.service'
import normalizeData from '../utils/normalizeData'
import { INormalizable } from '../types/types'

interface IStoreEntity<T> {
	[id: number | string]: T
}

export class CreateStore<T extends INormalizable> {
	private _enttities: IStoreEntity<T> = {}
	private _ids: number[] = []
	private _isLoading: boolean = false
	private _isSuccess: boolean = false
	private _error: string | null = null
	private _endpoint: string

	constructor(endpoint: string) {
		makeAutoObservable(this)
		this._endpoint = endpoint
	}

	public async fetch(): Promise<void> {
		this._isLoading = true
		this._error = null
		try {
			const { data } = (await httpService.get(this._endpoint)) as { data: T[] }
			const normalizedData = normalizeData<T>(data)

			this._enttities = normalizedData.entities
			this._ids = normalizedData.ids
			this._isSuccess = true
		} catch (error: unknown) {
			if (error instanceof Error) {
				this._error = error.message
			}
		} finally {
			this._isLoading = false
		}
	}

	public getById(id: number | string): T {
		return this._enttities[id]
	}

	public async create(data: {}): Promise<T | null> {
		try {
			const result = await httpService.post(this._endpoint, data)
			const entity = result.data
			this._enttities[entity.id] = entity
			this._ids.push(entity.id)
			return entity
		} catch (error) {
			console.error(error)

			return null
		}
	}

	public get ids(): number[] {
		return this._ids
	}

	public get isLoading(): boolean {
		return this._isLoading
	}

	public get isSuccess(): boolean {
		return this._isSuccess
	}

	public get error(): string | null {
		return this._error
	}
}
