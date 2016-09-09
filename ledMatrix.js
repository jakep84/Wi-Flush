var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

var matrix = new five.Led.Matrix({
	pins: {
		data:2,
		clock: 3,
		cs: 4
	},
	devices: 1
});

var heart = [
	"01100110",
	"10011001",
	"10000001",
	"10000001",
	"01000010",
	"00100100",
	"00011000",
	"00000000"
];

matrix.draw(heart);
console.log("heart drawn");
});