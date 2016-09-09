var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
// Just a pin
var led = new five.Led(13);

	led.blink();
});