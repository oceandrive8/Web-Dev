def array123(nums):
    for i in range(len(nums) - 2):
        if nums[i] == 1 and nums[i + 1] == 2 and nums[i + 2] == 3:
            return True
    return False


"""
Given an array of ints, return True if the sequence of numbers 1, 2, 3 appears in the array somewhere."""