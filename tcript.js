/* COUNTDOWN – 28 DEC 2025 */
const targetDate = new Date("2025-12-28T00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerText =
      "❤️ Today is our special day ❤️";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerText =
    `${d}d ${h}h ${m}m ${s}s`;
}, 1000);

/* HEART FALLING ANIMATION */
const heartsContainer = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  heart.style.fontSize = (14 + Math.random() * 20) + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);

/* SLIDESHOW */
let currentSlide = 1;
const totalSlides = 5;

function next() {
  document.getElementById("screen1").classList.add("hidden");
  document.getElementById("screen2").classList.remove("hidden");
}

function showPhotos() {
  document.getElementById("screen2").classList.add("hidden");
  document.getElementById("photosScreen").classList.remove("hidden");

  setInterval(() => {
    currentSlide++;
    if (currentSlide > totalSlides) currentSlide = 1;
    document.getElementById("slide").src = `photos/${currentSlide}.jpg`;
  }, 2500);
}

function openLetter() {
  document.getElementById("photosScreen").classList.add("hidden");
  document.getElementById("screen3").classList.remove("hidden");
}

