def max_end3(nums):
    larger = max(nums[0], nums[-1])
    return [larger] * 3

print(max_end3([1, 2, 3]))
print(max_end3([3, 2, 9]))