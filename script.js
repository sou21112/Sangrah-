let users = [];
let posts = [];
let currentUser = null;

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

    currentUser = users.find(user => user.email === email && user.password === password);
    if (currentUser) {
        alert(`Welcome back, ${currentUser.username}!`);
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

function showProfile() {
    hideAll();
    document.getElementById('profile').style.display = 'block';
    if (currentUser) {
        document.getElementById('profileUsername').innerText = `Username: ${currentUser.username}`;
        document.getElementById('profileEmail').innerText = `Email: ${currentUser.email}`;
        displayUserPosts();
    } else {
        alert("Please login to view profile.");
        showLogin();
    }
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
            username: currentUser.username,
            userId: currentUser.email
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

function displayUserPosts() {
    const userPostContainer = document.getElementById('userPostContainer');
    userPostContainer.innerHTML = '';
    const userPosts = posts.filter(post => post.userId === currentUser.email);

    userPosts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<img src="${post.media}" alt="User Post">`;
        userPostContainer.appendChild(postDiv);
    });
}
