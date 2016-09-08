var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
//	
//	var button = new five.Button(2);
//	button.on("press", function() {
//	console.log("button pressed");


		var servo = new five.Servo({
			pin : 10,
		center : true});
		console.log("servo centered");
//		servo.sweep();
//		console.log("sweeping");
	
	
	});
//});