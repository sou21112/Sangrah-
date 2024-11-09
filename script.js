// Like button interaction
document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked');
        button.textContent = button.classList.contains('liked') ? 'Liked' : 'Like';
    });
});

// Follow button interaction
document.querySelectorAll('.suggested-profile button').forEach(button => {
    button.addEventListener('click', () => {
        button.textContent = button.textContent === 'Follow' ? 'Following' : 'Follow';
    });
});
