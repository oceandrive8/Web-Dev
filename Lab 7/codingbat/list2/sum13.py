def sum13(nums):
    total = 0
    skip = False
    for num in nums:
        if num == 13:
            skip = True
        elif skip:
            skip = False
        else:
            total += num
    return total

print(sum13([1, 2, 2, 1, 13]))

"""Return the sum of the numbers in the array, 
returning 0 for an empty array. 
Except the number 13 is very unlucky, 
so it does not count and numbers that come immediately after a 13 also do not count."""