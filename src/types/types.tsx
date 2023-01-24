export interface IPost {
	userId: number
	id: number
	title: string
	body: string
}

export interface IUser {
	id: number
	name: string
	username: string
	email: string
	address: {
		street: string
		suite: string
		city: string
		zipcode: string
		geo: {
			lat: string
			lng: string
		}
	}
	phone: string
	website: string
	company: {
		name: string
		catchPhrase: string
		bs: string
	}
}

export interface INormalizable {
	id: number
}

export interface INormaledData<T> {
	ids: number[]
	entities: { [key: number]: T }
}
