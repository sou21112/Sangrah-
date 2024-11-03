let users = [];
let posts = [];

function showLogin() {
    hideAll();
    document.getElementById('auth').style.display = 'block';
    document.getElementById('login-form').style.display = 'block';
}

function showRegister() {
    hideAll();
    document.getElementById('auth').style.display = 'block';
    document.getElementById('register-form').style.display = 'block';
}

function showForgotPassword() {
    hideAll();
    document.getElementById('auth').style.display = 'block';
    document.getElementById('forgot-password-form').style.display = 'block';
}

function hideAll() {
    document.getElementById('auth').style.display = 'none';
    document.getElementById('home-feed').style.display = 'none';
    document.getElementById('upload').style.display = 'none';
    document.getElementById('profile').style.display = 'none';
    document.getElementById('messages').style.display = 'none';
    document.getElementById('reels').style.display = 'none';
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    users.push({ username, email, password });
    alert('User registered successfully!');
    showLogin();
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert(`Welcome back, ${user.username}!`);
        hideAll();
        document.getElementById('home-feed').style.display = 'block';
        displayPosts();
    } else {
        alert('Invalid email or password!');
    }
}

function resetPassword() {
    const email = document.getElementById('forgotEmail').value;
    const user = users.find(user => user.email === email);
    if (user) {
        alert('Password reset link sent to your email!');
        showLogin();
    } else {
        alert('Email not found!');
    }
}

function showHomeFeed() {
    hideAll();
    document.getElementById('home-feed').style.display = 'block';
}

function showUpload() {
    hideAll();
    document.getElementById('upload').style.display = 'block';
}

function uploadMedia() {
    const mediaInput = document.getElementById('mediaInput');
    const file = mediaInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const post = {
            media: event.target.result,
            username: users[users.length - 1].username, // Assuming the last user is logged in
        };
        posts.push(post);
        displayPosts();
        mediaInput.value = ''; // Clear input
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        alert('Please select an image or video to upload!');
    }
}

function displayPosts() {
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<div class="username">${post.username}</div><img src="${post.media}" alt="Post Image">`;
        postContainer.appendChild(postDiv);
    });
}
