var five = require('johnny-five'),
	board = new five.Board(),
	led;

	board.on("ready", function () {
	console.log('Board is ready');
		
	led = new five.Led(13);
	console.log('LED is set');
	
	led.blink(5000);
	console.log('LED toggle on/off e5s');

	});
//program is up and running
console.log("\nWaiting for device to connect...");