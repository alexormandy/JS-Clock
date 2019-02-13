let clock = document.getElementById("clock");
let todayDate = document.getElementById("day");
let greeting = document.getElementById("greeting");
let day;
let month;
let nth;

let showClock = () => {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes();
  let currentSecond = currentTime.getSeconds();
  let currentDate = currentTime.getDate();
  let currentMonth = currentTime.getMonth();
  let currentDay = currentTime.getDay();
  let currentYear = currentTime.getFullYear();

  if (currentDay == 1) {
    day = "Monday";
  } else if (currentDay == 2) {
    day = "Tuesday";
  } else if (currentDay == 3) {
    day = "Wednesday";
  } else if (currentDay == 4) {
    day = "Thursday";
  } else if (currentDay == 5) {
    day = "Friday";
  } else if (currentDay == 6) {
    day = "Saturday";
  } else if (currentDay == 7) {
    day = "Sunday";
  }

  if (currentMonth == 0) {
    month = "January";
  } else if (currentMonth == 1) {
    month = "February";
  } else if (currentMonth == 3) {
    month = "March";
  } else if (currentMonth == 4) {
    month = "April";
  } else if (currentMonth == 5) {
    month = "May";
  } else if (currentMonth == 6) {
    month = "June";
  } else if (currentMonth == 7) {
    month = "July";
  } else if (currentMonth == 8) {
    month = "August";
  } else if (currentMonth == 9) {
    month = "September";
  } else if (currentMonth == 10) {
    month = "October";
  } else if (currentMonth == 11) {
    month = "November";
  } else if (currentMonth == 12) {
    month = "December";
  }

  if (currentHour >= 12) {
    greeting.textContent = "Good Afternoon";
  } else if (currentHour >= 18) {
    greeting.textContent = "Good Evening";
  } else if (currentHour >= 1) {
    greeting.textContent = "Good Morning";
  } else {
  }

  if (currentDay == 1) {
    nth = "st";
  } else if (currentDate == 2) {
    nth = "nd";
  } else if (currentDate == 3) {
    nth = "rd";
  } else if (currentDate >= 4) {
    nth = "th";
  }

  clock.textContent = `${currentHour} : ${currentMinute} ${currentSecond}`;
  todayDate.textContent = `${day} ${currentDate}${nth} ${month} ${currentYear}`;
  setTimeout(() => {
    showClock();
  }, 10);
};

showClock();
