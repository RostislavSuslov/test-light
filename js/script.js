function counterNum() {
	let num = 0;

	return function() {
		return num++
	}

}


var jj = counterNum();

console.log(jj());
