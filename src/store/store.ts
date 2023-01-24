import { makeAutoObservable } from 'mobx'
import { httpService } from '../services/http.service'
import normalizeData from '../utils/normalizeData'
import { INormalizable } from './../types/types'

interface IStoreEntity<T> {
	[id: number]: T
}

export class Store<T extends INormalizable> {
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

	public getById(id: number): T {
		return this._enttities[id]
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
