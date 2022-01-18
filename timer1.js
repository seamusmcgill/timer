// Create a function to get relevant arguments from command line
const getBeepTimes = (args) => {
  let beepTimes = [];
  for (let i = 2; i < args.length; i++) {
    // Convert string to a number
    let parsedNumber = parseInt(args[i]);
    // Check that argument is positive and a number
    if (!isNaN(parsedNumber) && parsedNumber >= 0) {
      beepTimes.push(args[i] * 1000);
    }
  }
  return beepTimes;
};

let beepTimes = getBeepTimes(process.argv);
// Loop through beeptimes and output sound after delay
for (const time of beepTimes) {
  setTimeout(() => {
    process.stdout.write("\x07");
  }, time);
}
