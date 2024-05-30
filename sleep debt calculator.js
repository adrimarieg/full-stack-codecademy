function getSleepHours(day) {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 8;
  } else if (day === "wednesday") {
    return 8;
  } else if (day === "thursday") {
    return 8;
  } else if (day === "friday") {
    return 8;
  } else if (day === "saturday") {
    return 8;
  } else if (day === "sunday") {
    return 8;
  } else {
    console.log("Your day of the week is incorrect. Check spelling.");
  }
} 

function getActualSleepHours() {
  return getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");
}

function getIdealSleepHours() {
  var idealHours = 8;
  return idealHours*7;
}

function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("The user slept the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("The user slept more than necessary by " + (actualSleepHours - idealSleepHours) + "hours.");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("The user should get some rest.");
  } else {
    console.log("something is not quite right.");
  }
}

calculateSleepDebt();

