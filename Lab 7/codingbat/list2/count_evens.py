def count_evens(nums):
    return sum(1 for num in nums if num % 2 == 0)
print(count_evens([1, 3, 5]))

"""Return the number of even ints in the given array.
Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1"""