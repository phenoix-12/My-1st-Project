const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

//Load Saved Theme from localStorage 
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.className = savedTheme;
    toggleButton.textContent = savedTheme === 'dark-theme' ? 'Toggle Light Mode' : 'Toggle Dark Mode';
}

//Toggle Theme on Click
toggleButton.addEventListener('click',() => {
    if (body.classList.contains('light-theme')) {
        body.className = 'dark-theme';
        toggleButton.textContent = 'Toggle Light Mode';
        localStorage.setItem('theme', 'dark-theme');
    } else {
        body.className = 'light-theme';
        toggleButton.textContent = 'Toggle Dark Mode';
        localStorage.setItem('theme', 'light-theme');
    }
});