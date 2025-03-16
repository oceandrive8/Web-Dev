def rotate_left3(nums):
    return nums[1:] + [nums[0]]

print(rotate_left3([7, 4, 3]))