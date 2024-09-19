// Function to apply the theme
function applyTheme(mode) {
    const themeLink = document.getElementById('theme-stylesheet');
    themeLink.href = mode === 'dark' ? 'dark-mode.css' : 'light-mode.css';
}

// Function to toggle the theme
function toggleTheme() {
    const currentMode = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    applyTheme(currentMode);

    // Store the theme in localStorage
    localStorage.setItem('theme', currentMode);
}

// Event listener for the theme toggle button
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('themeToggle');
    toggleButton.addEventListener('click', toggleTheme);
});
