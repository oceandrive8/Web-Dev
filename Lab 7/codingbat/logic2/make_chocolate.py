def make_chocolate(s, b, g):
    bu = min(g // 5, b)
    rem = g - bu * 5
    if rem <= s:
        return rem
    return -1

print(make_chocolate(4, 1, 10))


"""We want make a package of goal kilos of chocolate.
 We have small bars (1 kilo each) and big bars (5 kilos each). 
 Return the number of small bars to use, assuming we always use big bars before small bars. 
 Return -1 if it can't be done."""