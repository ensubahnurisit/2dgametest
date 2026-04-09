// test_game.js

const { calculateJumpHeight, moveLeft, moveRight } = require("./game");

test("calculateJumpHeight works correctly", () => {
    expect(calculateJumpHeight(10, 2)).toBeCloseTo(25);
});

test("moveLeft respects boundary", () => {
    expect(moveLeft(5, 10)).toBe(0);
    expect(moveLeft(20, 5)).toBe(15);
});

test("moveRight respects boundary", () => {
    expect(moveRight(50, 10, 55)).toBe(55);
    expect(moveRight(20, 5, 100)).toBe(25);
});
