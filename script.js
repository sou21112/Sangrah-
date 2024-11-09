// Example interactivity for like button
document.querySelectorAll('.post-actions button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        alert(`${button.textContent} button clicked`);
    });
});

