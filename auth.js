// Simulate users data for login (this should be securely handled in a real system)
const users = {
  "user1": "password1", // Username: password
  "user2": "password2"
};

// Check if the user is already logged in
function checkLogin() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    window.location.href = "home.html"; // Redirect to home page if already logged in
  }
}

// Login function to check username and password
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Check if username and password match
  if (users[username] && users[username] === password) {
    // Store the logged-in user in localStorage
    localStorage.setItem("loggedInUser", username);

    // Redirect to home page
    window.location.href = "home.html";
  } else {
    // Show error message if credentials are incorrect
    errorMessage.textContent = "Incorrect username or password.";
  }
}

