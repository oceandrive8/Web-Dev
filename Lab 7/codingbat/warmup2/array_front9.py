def array_front9(nums):
    for i in range(min(4, len(nums))):
        if nums[i] == 9:
            return True
    return False


"""
Given an array of ints, return True if one of the first 4 elements in the array is a 9. 
The array length may be less than 4."""