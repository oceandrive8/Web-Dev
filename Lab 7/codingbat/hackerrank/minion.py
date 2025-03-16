def minion_game(s):
    vowels='AEIOU'
    stuart=0
    kevin= 0
    l=len(s)

    for i in range(l):
        if s[i] in vowels:
            kevin+=l-i  
        else:
            stuart+=l-i  

    if kevin>stuart:
        print(f'Kevin {kevin}')
    elif stuart>kevin:
        print(f'Stuart {stuart}')
    else:
        print('Draw')

minion_game(input())
