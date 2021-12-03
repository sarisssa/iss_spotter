const nextISSTimesForMyLocation = require('./iss');

const printPassTimes = require('./printTime');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});