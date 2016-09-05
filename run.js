var five = require("johnny-five"),
	keypress = require("keybpress");
	keypress(process.stdin);

var opts = {};
opts.port = process.argv[2] || "";

var board = new five.Board(opts);

board.on("ready", function() {
 console.log("Control the bot with the down and up arrows, space to stop,  Q to quit")
 
 var wheel = new.Servo.Continuous(9);
	
//Configure stdin for the keyboard controller 
	process.stdin.resume();
	process.stdin.setEncoding('utf8');
	process.stdin.setRawMode(true);
	
	process.stdin.on("keypress", function(ch, key) {
		
	});
	
	
	
};
