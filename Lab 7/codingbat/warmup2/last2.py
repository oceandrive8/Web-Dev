def last2(string):
    if len(string) < 2:
        return 0
    last2_sub = string[-2:]
    count = 0
    for i in range(len(string) - 2):
        if string[i:i+2] == last2_sub:
            count += 1
    return count


print(last2('hixxhi'))




"""
Given a string, return the count of the number
of times that a substring length 2 appears in the string and also as the last 2 chars of the string, 
so "hixxxhi" yields 1 (we won't count the end substring)."""