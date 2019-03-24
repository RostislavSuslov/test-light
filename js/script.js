	function toggleRed() {

		var timerId = setInterval(function() {
		  	document.getElementById("red-circle").classList.toggle("opacity-red");
		}, 250);
		setTimeout(function() {
			clearInterval(timerId);
		}, 1750);
	}

	function toggleYellow() {
		var timerId = setInterval(function() {
		  	document.getElementById("yellow-circle").classList.toggle("opacity-yellow");
		}, 250);
		setTimeout(function() {
			clearInterval(timerId);
		}, 1750);
	}

	function toggleGreen() {
		var timerId = setInterval(function() {
		  	document.getElementById("green-circle").classList.toggle("opacity-green");
		}, 250);
		setTimeout(function() {
			clearInterval(timerId);
		}, 1750);}
