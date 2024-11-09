// Handle screen navigation
document.getElementById("forgotPasswordLink").addEventListener("click", function() {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("forgotPasswordScreen").style.display = "block";
});

document.getElementById("registerLink").addEventListener("click", function() {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("registerScreen").style.display = "block";
});

document.getElementById("backToLogin").addEventListener("click", function() {
    document.getElementById("forgotPasswordScreen").style.display = "none";
    document.getElementById("loginScreen").style.display = "block";
});

document.getElementById("backToLoginFromRegister").addEventListener("click", function() {
    document.getElementById("registerScreen").style.display = "none";
    document.getElementById("loginScreen").style.display = "block";
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("homeScreen").style.display = "block";
});

document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Password reset link sent!");
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Account created successfully!");
    document.getElementById("registerScreen").style.display = "none";
    document.getElementById("loginScreen").style.display = "block";
});
