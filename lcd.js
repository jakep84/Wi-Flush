var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var lcd = new five.LCD({ pins: [7, 8, 9, 10, 11, 12] });
console.log("it works");
  lcd.print("Hello");
});
