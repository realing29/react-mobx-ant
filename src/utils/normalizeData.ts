import { INormaledData, INormalizable } from './../types/types'
const normalizeData = <T extends INormalizable>(list: T[]) => {
	const result: INormaledData<T> = { ids: [], entities: {} }

	list.forEach((item) => {
		result.entities[item.id] = item
		result.ids.push(item.id)
	})

	return result
}

export default normalizeData
