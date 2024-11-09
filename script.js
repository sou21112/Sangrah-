// Select DOM elements
const loginScreen = document.getElementById("loginScreen");
const forgotPasswordScreen = document.getElementById("forgotPasswordScreen");
const registerScreen = document.getElementById("registerScreen");
const homeScreen = document.getElementById("homeScreen");

// Event listeners for navigation between screens
document.getElementById("forgotPasswordLink").addEventListener("click", function() {
    loginScreen.style.display = "none";
    forgotPasswordScreen.style.display = "block";
});

document.getElementById("registerLink").addEventListener("click", function() {
    loginScreen.style.display = "none";
    registerScreen.style.display = "block";
});

document.getElementById("backToLogin").addEventListener("click", function() {
    forgotPasswordScreen.style.display = "none";
    loginScreen.style.display = "block";
});

document.getElementById("backToLoginFromRegister").addEventListener("click", function() {
    registerScreen.style.display = "none";
    loginScreen.style.display = "block";
});

// Login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Logging in...");
    loginScreen.style.display = "none";
    homeScreen.style.display = "block";
});

// Forgot password form submission
document.getElementById("forgotPasswordForm").add
