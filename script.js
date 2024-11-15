function togglePassword() {
    var password = document.querySelector('input[type="password"]');
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}
