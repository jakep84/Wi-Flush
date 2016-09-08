var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

	var servo = new five.Servo(10);
	var animation = new.five.Animation(servo);
	console.log("servo & animation set"); 


	animation.enqueue({
		duration: 2000,
		cuePoints: [0, 0.25, 0.5, 0.75, 1.0],
		keyFrames: [ {degrees: 0}, {degrees: 135}, {degrees: 45}, {degrees: 180}, {degrees: 0}]
	});

	//sweep from left to right
	servo.sweep();
	console.log("sweep complete");
});