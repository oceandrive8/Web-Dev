def front_times(string, n):
    front = string[:3]
    return front * n
print(front_times('Choco', 2))


"""
Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. 
Return n copies of the front;"""