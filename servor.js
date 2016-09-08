var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
	
	var servo = new five.Servo({
		pin: 10,
		range: [45, 135],
		startAt: 120
	});
	console.log("servo set"); 
	//sweep from left to right
	servo.sweep();
	consol.log("sweep complete");
});