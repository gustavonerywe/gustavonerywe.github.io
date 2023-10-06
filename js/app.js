function toggleDarkMode() {
    document.body.classList.toggle('dark-theme');
}

document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

const imgTheme = document.getElementById('img-theme');

imgTheme.addEventListener('click', () => {
    const currentSrc = imgTheme.getAttribute('src');

    if (currentSrc === 'img/night-mode.png') 
        imgTheme.setAttribute('src', 'img/sunny.png');
    else 
        imgTheme.setAttribute('src', 'img/night-mode.png');
});