// game.js

function calculateJumpHeight(force, gravity) {
    return (force ** 2) / (2 * gravity);
}

function moveLeft(currentX, delta) {
    return Math.max(0, currentX - delta);
}

function moveRight(currentX, delta, maxX) {
    return Math.min(maxX, currentX + delta);
}

// export for Jest
if (typeof module !== "undefined") {
    module.exports = { calculateJumpHeight, moveLeft, moveRight };
}
