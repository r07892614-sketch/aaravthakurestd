// Countdown Timer
let timeLeft = 60;
const timerEl = document.getElementById("timer");

const timer = setInterval(() => {
  timeLeft--;
  timerEl.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timer);
    timerEl.textContent = "Time's Up!";
  }
}, 1000);

// Fade Animation (optional extra smooth effect)
const joinBtn = document.getElementById("joinBtn");
let fade = true;
setInterval(() => {
  joinBtn.style.opacity = fade ? "0.7" : "1";
  fade = !fade;
}, 1000);

// Redirect on Button Click
joinBtn.addEventListener("click", () => {
  window.open("https://t.me/+QZVSUI8CAwc5ZGM9", "_blank");
});
