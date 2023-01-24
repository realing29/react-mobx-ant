import axios from 'axios'

export const httpService = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
})
