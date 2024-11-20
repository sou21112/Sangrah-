const toggleThemeBtn = document.getElementById("toggle-theme");
const body = document.body;

// Toggle Dark/Light Mode
toggleThemeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// Dynamic Quote of the Day
const quotes = [
  '"The best way to predict the future is to create it." - Peter Drucker',
  '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill',
  '"Do what you can, with what you have, where you are." - Theodore Roosevelt',
];
const dailyQuote = document.getElementById("daily-quote");
dailyQuote.textContent = quotes[Math.floor(Math.random() * quotes.length)];

// File Upload (Placeholder)
const uploadBtn = document.getElementById("upload-btn");
uploadBtn.addEventListener("click", () => {
  alert("Upload functionality coming soon!");
});

