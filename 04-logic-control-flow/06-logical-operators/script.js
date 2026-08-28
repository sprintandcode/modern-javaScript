const age = 20;
const hasID = true;

if (age >= 18 && hasID) {
  console.log("You can enter.");
} else {
  console.log("You cannot enter.");
}

const isWeekend = false;
const isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("You can relax today.");
} else {
  console.log("You have to work today.");
}


const isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in.");
} else {
  console.log("Welcome!");
}