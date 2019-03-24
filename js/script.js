function counterClick() {
	let num =0

	return {
		addOne: function() {

		}
	}
}


const obj = {
	name: 'Rostik',
	surname: 'Suslov',
}

console.log(obj.name);


	/*window.onload = function() { // показывает что html  прогрузился
		var btn1 = document.querySelector('.red');
		const btn2 = document.querySelector('.yellow');
		let btn3 = document.querySelector('.green');

		//btn1.addEventListener('click', toggleRed);

		btn1.onclick = function() {
			
		}	


		const text = 'not changes';

		let text2 = 'text will change';

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
