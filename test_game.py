# test_game.py
import pytest
from game import calculate_jump_height, move_left, move_right

def test_calculate_jump_height():
    assert calculate_jump_height(10, 2) == 25
    assert calculate_jump_height(5, 1) == 12.5

def test_move_left():
    assert move_left(5, 10) == 0
    assert move_left(20, 5) == 15

def test_move_right():
    assert move_right(50, 10, 55) == 55
    assert move_right(20, 5, 100) == 25
