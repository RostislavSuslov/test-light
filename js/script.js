	window.onload = function() {
		const btn1 = document.querySelector('.red');
		const btn2 = document.querySelector('.yellow');
		const btn3 = document.querySelector('.green');

		btn1.addEventListener('click', toggleRed);
		

	}

	function toggleRed() {

		var timerId = setInterval(function() {
			document.querySelector('.red').classList.toggle("opacity-red");
		}, 250);
		setTimeout(function() {
			clearInterval(timerId);
		}, 1750);
	}

	// function toggleYellow() {
	// 	var timerId = setInterval(function() {
	// 	  	document.getElementById("yellow-circle").classList.toggle("opacity-yellow");
	// 	}, 250);
	// 	setTimeout(function() {
	// 		clearInterval(timerId);
	// 	}, 1750);
	// }

	// function toggleGreen() {
	// 	var timerId = setInterval(function() {
	// 	  	document.getElementById("green-circle").classList.toggle("opacity-green");
	// 	}, 250);
	// 	setTimeout(function() {
	// 		clearInterval(timerId);
	// 	}, 1750);}
