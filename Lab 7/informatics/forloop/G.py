x=int(input())
for d in range(2, x + 1):
    if x%d==0:
        print(d)
        break


"""Входные данные
Вводится натуральное число x.

Выходные данные
Выведите наименьший делитель числа x, отличный от 1."""