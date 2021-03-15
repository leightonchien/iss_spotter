// Input:
//  *   Array of data objects defining the next fly-overs of the ISS.
//  *   [ { risetime: <number>, duration: <number> }, ... ]
//  * Returns:
//  *   undefined
//  * Sideffect:
//  *   Console log messages to make that data more human readable.
//  *   Example output:
//  *   Next pass at Fri Jun 01 2021 13:01:35 GMT-0700 (Pacific Daylight Time) for 465 seconds!


const { nextISSTimesForMyLocation } = require("./iss");

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(
      `Next pass at ${datetime.toLocaleString("en-US", {
        timeZone: "America/Los_Angeles"
      })} for ${duration} seconds!`
    );
  }
};


nextISSTimesForMyLocation((error, passTimes) => {

  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print!
  printPassTimes(passTimes);
});