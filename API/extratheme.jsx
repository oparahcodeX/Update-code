
(function() {
    const theme = localStorage.getItem('theme') || 'light'; // Default to light mode
    const head = document.head || document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = 'theme-stylesheet';

    // Apply the stored theme
    link.href = theme === 'dark' ? 'dark-mode.css' : 'light-mode.css';

    // Attach the stylesheet before the content renders
    head.appendChild(link);

    // Show the body only after the correct stylesheet is applied
    link.onload = function() {
        document.body.style.visibility = 'visible';
    };
})();