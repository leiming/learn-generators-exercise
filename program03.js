function* flat(arr) {
	for (item of arr) {
		if (Array.isArray(item)) {
			yield* flat(item)
		} else {
			yield item
		}
	}
}

var A = [1, [2, [3, 4], 5], 6]

for (var f of flat(A)) {
	console.log(f)
}
