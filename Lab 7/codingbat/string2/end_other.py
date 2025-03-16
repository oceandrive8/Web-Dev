def end_other(s1, s2):
    s1 = s1.lower()
    s2 = s2.lower()
    
    return s1.endswith(s2) or s2.endswith(s1)

print(end_other('xyz', 'z'))


"""
Given two strings, return True if either of the strings appears at the very end of the other string,
 ignoring upper/lower case differences (in other words, 
 the computation should not be "case sensitive")"""