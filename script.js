// Basic login functionality
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "testuser" && password === "password") {
        alert("Login successful!");
        window.location.href = "home.html";
    } else {
        alert("Incorrect username or password. Please try again.");
    }
});

// Like button functionality
document.querySelectorAll(".actions button").forEach(button => {
    button.addEventListener("click", () => {
        button.style.color = button.style.color === "red" ? "#3897f0" : "red";
    });
});

