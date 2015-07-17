function* factorial(n) {
	var c = 1
	for (var i = 1; i <= n; i++) {
		c = c * i
		yield c
	}
}

for (var n of factorial(5)) {
	console.log(n);
}
