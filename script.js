// Toggle password visibility on login page
document.getElementById("showPassword").addEventListener("change", function () {
    const passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";
});

// Registration form validation
document.getElementById("registerForm").addEventListener("submit", function (event) {
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        event.preventDefault();
    }
});


// Forgot Password form submission
document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    const email = document.getElementById("email").value;
    const notification = document.getElementById("notification");

    // Simulate sending an email by displaying a confirmation message
    notification.textContent = `A password reset link has been sent to ${email}.`;
    notification.style.color = "green";

    // Clear the email input after displaying the message
    document.getElementById("email").value = "";
});
