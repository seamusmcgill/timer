const readline = require("readline");

// Create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create array of numbers of strings to check against keypress event
let numbers = ["1","2","3","4","5","6","7","8","9"];

rl.input.on("keypress", (str, key) => {
  // Beep on press of b
  if (str === "b") {
    rl.output.write("   \x07");
  }
  // Start countdown on press of numbers
  if (numbers.includes(str)) {
    rl.output.write(`   setting timer for ${str} seconds...\n`);
    setTimeout(() => {
      process.stdout.write("\x07");
    }, str * 1000);
  }
  // Output exit message on SIGINT
  if (key.ctrl && key.name === "c") {
    rl.output.write("Thanks for using me, ciao!\n");
  }
});
