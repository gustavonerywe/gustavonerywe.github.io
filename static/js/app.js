function toggleDarkMode() {
    document.body.classList.toggle('dark-theme');
}

document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

const imgTheme = document.getElementById('img-theme');

imgTheme.addEventListener('click', () => {
    const currentSrc = imgTheme.getAttribute('src');

    if (currentSrc === 'static/img/night-mode.png') 
        imgTheme.setAttribute('src', 'static/img/sunny.png');
    else 
        imgTheme.setAttribute('src', 'static/img/night-mode.png');
});