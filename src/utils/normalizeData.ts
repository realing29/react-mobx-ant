import { INormaledData, INormalizable } from './../types/types'

export default <T extends INormalizable>(list: T[]) => {
	const result: INormaledData<T> = { ids: [], entities: {} }

	list.forEach((item) => {
		result.entities[item.id] = item
		result.ids.push(item.id)
	})

	return result
}
