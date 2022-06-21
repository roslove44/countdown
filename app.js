const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const secondes = document.getElementById("secondes");

const currentYear = new Date().getFullYear();

const newYearTime = new Date("January 1 2023 00:00:00");

// Update CountdownTime
function updateCountDateTime() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  console.log(d, h, m, s);

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  secondes.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(updateCountDateTime, 1000);
