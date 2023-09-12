
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
const currentDayIndex = currentDate.getDay();
const currentDay = daysOfWeek[currentDayIndex];

const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
currentDayElement.textContent = currentDay;


const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
currentUTCTimeElement.textContent = Date.now();
