// Simulate users data for login (this should be securely handled in a real system)
const users = {
  "user1": "password1", // Username: password
  "user2": "password2"
};

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Check if username and password match
  if (users[username] && users[username] === password) {
    // Redirect to the home page if login is successful
    window.location.href = "home.html"; // Change this URL to the actual home page
  } else {
    // Show error message if credentials are incorrect
    errorMessage.textContent = "Incorrect username or password.";
  }
}
