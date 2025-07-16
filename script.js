
const password = "2224";

function checkPassword() {
  const input = document.getElementById('passwordInput').value;
  if (input === password) {
    document.getElementById('lockScreen').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  } else {
    alert("Incorrect password!");
  }
}

// Heart canvas animation
const canvas = document.getElementById('hearts');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];
for (let i = 0; i < 100; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 5 + 2,
    speed: Math.random() * 1 + 0.5
  });
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255, 0, 100, 0.6)';
  hearts.forEach(h => {
    ctx.beginPath();
    ctx.arc(h.x, h.y, h.size, 0, Math.PI * 2);
    ctx.fill();
    h.y -= h.speed;
    if (h.y < -5) h.y = canvas.height + 5;
  });
  requestAnimationFrame(drawHearts);
}

drawHearts();
