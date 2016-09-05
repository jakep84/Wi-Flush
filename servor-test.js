var five = require("johnny-five");
var temporal = require("temporal");

var opts = {};
opts.port = process.argv[2] || "";

var board = new five.Board(opts);

board.on("ready", function() {
	var wheel = new five.Servo.Continuous(9);
	
	temporal.queue([ 
		{
		delay: 5000,
			task:function() {
				console.log("spinnning clockwise");
				wheel.cw();
			}
		},  {
		delay: 3000, 
			task:function() {
				console.log("stopping");
				wheel.cw();
			}
		}, { 
		delay: 3000,
			task: function() {
				console.log("spinning counter-clockwise");
				wheel.ccw();
			}
		} , {
		delay: 3000,
			task: function() {
			console.log("stopping");
				wheel.stop();
			}
		} , {
		delay : 1500,
			task: function() {
			console.log("quitting");
				process.exit();
			}
		}
		])
});