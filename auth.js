// auth.js

// Sample credentials for demonstration purposes.
const validUsername = "user123";
const validPassword = "password123";

function login() {
  // Get input values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Check credentials
  if (username === validUsername && password === validPassword) {
    // Redirect to home feed if credentials are correct
    window.location.href = "home.html";
  } else {
    // Show error message if credentials are incorrect
    errorMessage.textContent = "Incorrect username or password. Please try again.";
    errorMessage.style.color = "red";
  }
}
