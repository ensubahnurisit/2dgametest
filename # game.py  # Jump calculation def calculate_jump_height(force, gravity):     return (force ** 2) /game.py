# game.py

# Jump calculation
def calculate_jump_height(force, gravity):
    return (force ** 2) / (2 * gravity)

# Horizontal movement
def move_left(current_x, delta):
    return max(0, current_x - delta)

def move_right(current_x, delta, max_x):
    return min(max_x, current_x + delta)
