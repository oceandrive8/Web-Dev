def make_bricks(small, big, goal):
    return goal <= small + big * 5 and goal % 5 <= small

print(make_bricks(3, 2, 10))


"""
Check if the goal length can be achieved using a combination of small and big bricks.
The goal should be less than or equal to the total length of available bricks (small + big * 5). 
Also, ensure that the remainder of the goal when divided by 5 can be met with the available small bricks."""