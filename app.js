let clock = document.getElementById("clock");
let todayDate = document.getElementById("day");
let day;
let month;

let showClock = () => {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes();
  let currentSecond = currentTime.getSeconds();
  let currentDate = currentTime.getDate();
  let currentMonth = currentTime.getMonth();
  let currentDay = currentTime.getDay();
  if (currentDay == 2) {
    day = "Tuesday";
  } else {
  }

  if (currentMonth == 1) {
    month = "February";
  }

  clock.textContent = `${currentHour} : ${currentMinute} ${currentSecond}`;
  todayDate.textContent = `${day} ${currentDate} ${month}`;
  setTimeout(() => {
    showClock();
  }, 10);
};

showClock();
