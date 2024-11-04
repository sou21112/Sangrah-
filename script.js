// Example username and password (replace with your logic or API)
const validUsername = "user"; // Change to the valid username
const validPassword = "password"; // Change to the valid password

function validateLogin() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const messageDiv = document.getElementById('loginMessage');

    if (usernameInput === validUsername && passwordInput === validPassword) {
        // Redirect to home.html if credentials are correct
        window.location.href = 'home.html';
        return false; // Prevent form submission
    } else {
        // Show error message if credentials are incorrect
        messageDiv.innerHTML = '<p style="color: red;">Invalid username or password. Please try again.</p>';
        return false; // Prevent form submission
    }
}

function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('showPassword');
    passwordField.type = showPasswordCheckbox.checked ? 'text' : 'password';
}


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

// Function to like a post and update like count dynamically
function likePost(postId) {
    const likeCount = document.getElementById(`likeCount${postId}`);
    let count = parseInt(likeCount.textContent);
    count++;
    likeCount.textContent = count; // Update the like count on the page
}

// Functions to open and close the comments modal
function openComments(postId) {
    const modal = document.getElementById("commentModal");
    modal.style.display = "block";
    // For a real app, fetch comments from a server here based on postId
}

function closeComments() {
    const modal = document.getElementById("commentModal");
    modal.style.display = "none";
}

// Function to add a comment and update the comment count dynamically
function addComment() {
    const commentList = document.getElementById("commentsList");
    const newComment = document.getElementById("newComment").value;

    if (newComment.trim() !== "") {
        // Append the new comment to the comments list
        const commentElement = document.createElement("p");
        commentElement.innerHTML = `<strong>You:</strong> ${newComment}`;
        commentList.appendChild(commentElement);

        // Update comment count
        const commentCount = document.querySelector(".comment-count span");
        commentCount.textContent = parseInt(commentCount.textContent) + 1;

        // Clear the input field
        document.getElementById("newComment").value = "";
    }
}
