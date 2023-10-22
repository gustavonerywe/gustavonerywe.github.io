function toggleDarkMode() {
    document.body.classList.toggle('white-theme');
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

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const stars = [];
const numStars = 1000;

const mouse = {
  x: 0,
  y: 0
};

//deixando as estrelas ficarem em uma posição aleatoria do canvas
for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    dx: Math.random() * 2 - 1,
    dy: Math.random() * 2 - 1,
  });
}

//atualizando a posição do mouse
canvas.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX - canvas.getBoundingClientRect().left;
  mouse.y = e.clientY - canvas.getBoundingClientRect().top;
});


//desenhando as estrelinhas
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if(document.body.className == 'dark-theme')
    ctx.fillStyle = 'white';
  else
    ctx.fillStyle = 'black';
  for (let i = 0; i < numStars; i++) {
    const star = stars[i];
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();

    const dx = mouse.x - star.x;
    const dy = mouse.y - star.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 30) {
      star.dx = dx * 0.10;
      star.dy = dy * 0.10;
    } else {
      star.dx = star.dx * 0.90 + (Math.random() * 2 - 1) * 0.10;
      star.dy = star.dy * 0.90 + (Math.random() * 2 - 1) * 0.10;
    }

    star.x += star.dx;
    star.y += star.dy;

    if (star.x > canvas.width + star.radius) {
      star.x = -star.radius;
    } else if (star.x < -star.radius) {
      star.x = canvas.width + star.radius;
    }

    if (star.y > canvas.height + star.radius) {
      star.y = -star.radius;
    } else if (star.y < -star.radius) {
      star.y = canvas.height + star.radius;
    }
  }

  requestAnimationFrame(draw);
}
draw();