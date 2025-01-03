/**
@author ertdfgcvb
@title  Coordinates: x, y
@desc   Use of coord.x and coord.y
*/

const density = 'Ñ@#W$9876543210?!abc;:+=-,._ '

export function main(coord, context, cursor, buffer) {
	const {cols, frame } = context
	const {x, y} = coord
	const sign = y % 2 * 2 - 1
	const index = (cols + y + x * sign + frame) % density.length
	return density[index]
}