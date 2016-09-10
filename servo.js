var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

//	var button = new five.Button(2);
//	button.on("press", function() {
//		console.log("button pressed");
//

		var servo = new five.Servo({
			pin : 10,
			range: [45,135]
		});
//		servo.min();
//		console.log("servo min");
//
//		servo.max();
//		console.log("servo max");
//
//		servo.min();
//		console.log("servo min");
//		servo.center();
//		console.log("servo centered");
				servo.sweep();
				console.log("sweeping");



	});
	//});