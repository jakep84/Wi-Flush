var five = require('johnny-five'),
	board = new five.Board(),
	led,
	toggleState = false;
//create the board object
board.on("ready", function () {
	//acknowledge board is ready
	console.log('Board ready');
	//create an led 
	led = new five.Led(13);
	//run function every 2 seconds
	setInterval(toggleLED, 200);
	
	function toggleLED() {
		toggleState = !toggleState;
		//toggle led light on if off and off if on 
		if (toggleState) led.on();
		else led.off():
	}
});
//program is up and running
console.log("\nWaiting for device to connect...");