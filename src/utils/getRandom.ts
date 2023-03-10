export function getRandomIntInclusive(min: number, max: number, fix = 1) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return +(Math.random() * (max - min) + min).toFixed(fix)
}
