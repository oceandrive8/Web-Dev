N=int(input())
a=list(map(int,input().split()))
for i in range(N//2):
    a[i],a[N-1-i]=a[N-1-i],a[i]
print(*a)


"""
Входные данные
Сначала задано число 𝑁 — количество элементов в массиве (1≤𝑁≤35). Далее через пробел записаны 𝑁 чисел — элементы массива. Массив состоит из целых чисел.

Выходные данные
Необходимо вывести массив, полученный после перестановки элементов.

"""