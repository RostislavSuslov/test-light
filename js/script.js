
window.onload = function() {

	const btn = document.querySelectorAll('.same_class'); //get all btns

	btn.forEach( (element) => { //for every btn adding event click
		element.addEventListener('click', sameFunctional);
	})

	//one function for all btn
	function sameFunctional() {
		//поочередно расскоменть и посмотри что в кончоли выводит при клике 
		//console.log(this);
		//console.log(this.classList);
		//console.log(this.classList[1]);
		
		let timerId = setInterval( () => 
			this.classList.toggle(`opacity-${this.classList[1]}`), 255 );

		setTimeout(function() {
			clearInterval(timerId);
		}, 1750);
	}
}
