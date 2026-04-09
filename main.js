// main.js

const player = document.getElementById("player");
const gameArea = document.getElementById("gameArea");

let isJumping = false;
let velocityY = 0;
let isMovingLeft = false;
let isMovingRight = false;

const gravity = 0.8;
const speed = 5;
const groundY = gameArea.clientHeight - player.clientHeight;

// Movement functions (copied from logic)
function moveLeft(currentX, delta) {
    return Math.max(0, currentX - delta);
}

function moveRight(currentX, delta, maxX) {
    return Math.min(maxX, currentX + delta);
}

document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && !isJumping) {
        isJumping = true;
        velocityY = -15;
    }
    if (e.code === "ArrowLeft") isMovingLeft = true;
    if (e.code === "ArrowRight") isMovingRight = true;
});

document.addEventListener("keyup", (e) => {
    if (e.code === "ArrowLeft") isMovingLeft = false;
    if (e.code === "ArrowRight") isMovingRight = false;
});

function update() {
    // Jump
    if (isJumping) {
        velocityY += gravity;
        let newY = player.offsetTop + velocityY;

        if (newY >= groundY) {
            newY = groundY;
            isJumping = false;
            velocityY = 0;
        }

        player.style.top = newY + "px";
    }

    // Movement
    let currentX = parseInt(player.style.left || 0);

    if (isMovingLeft) currentX = moveLeft(currentX, speed);
    if (isMovingRight) currentX = moveRight(currentX, speed, gameArea.clientWidth - player.clientWidth);

    player.style.left = currentX + "px";

    requestAnimationFrame(update);
}

update();
