N=int(input())
a=list(map(int,input().split()))
for i in range(N-1):
    if a[i]*a[i+1]>0:
        print("YES")
        break
else:
    print("NO")




"""
Входные данные
Сначала задано число 𝑁 — количество элементов в массиве (1≤𝑁≤10000). Далее через пробел записаны 𝑁 чисел — элементы массива. Массив состоит из целых чисел не равных 0.

Выходные данные
Необходимо вывести слово YES, если существует пара соседних элементов с одинаковыми знаками. В противном случае следует вывести слово NO."""