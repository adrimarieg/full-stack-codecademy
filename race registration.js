let raceNumber = Math.floor(Math.random() * 1000);

var registeredEarly = true;
var runnerAge = 18;

if (runnerAge >= 18 && registeredEarly) {
  raceNumber += 1000;
  console.log('Your race start time is 9:30 a.m. and your bib number is '+raceNumber);
} else if (runnerAge >= 18 && !registeredEarly) {
    raceNumber += 1000;
    console.log('Late adults run at 11:00 a.m. Your bib number is '+raceNumber);
} else {
  raceNumber += 1000;
  console.log('Youth registrants run at 12:30 p.m. (regardless of registration). Your bib number is '+raceNumber);
}

