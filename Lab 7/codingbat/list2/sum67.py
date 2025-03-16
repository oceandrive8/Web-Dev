def sum67(nums):
    total=0
    in_section=False
    for num in nums:
        if num==6:
            in_section=True
        if not in_section:
            total+=num
        if num==7 and in_section:
            in_section = False
    return total


print(sum67([1, 1, 6, 7, 2]))


"""Return the sum of the numbers in the array, 
except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). 
Return 0 for no numbers."""
