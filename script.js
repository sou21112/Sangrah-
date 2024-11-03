let users = [];
let posts = [];

function showLogin() {
    document.getElementById('auth').style.display = 'block';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('upload').style.display = 'none';
}

function showRegister() {
    document.getElementById('auth').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('upload').style.display = 'none';
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
        document.getElementById('auth').style.display = 'none';
        document.getElementById('upload').style.display = 'block';
        displayPosts();
    } else {
        alert('Invalid email or password!');
    }
}

function uploadImage() {
    const imageInput = document.getElementById('imageInput');
    const file = imageInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const post = {
            image: event.target.result,
            username: users[users.length - 1].username, // Assuming the last user is logged in
        };
        posts.push(post);
        displayPosts();
        imageInput.value = ''; // Clear input
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        alert('Please select an image to upload!');
    }
}

function displayPosts() {
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<strong>${post.username}</strong><br><img src="${post.image}" alt="Post Image">`;
        postContainer.appendChild(postDiv);
    });
}
