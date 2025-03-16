def power(a,n):  
   r=1  
   while n:
     r*=a;
     n-=1  
   return r  

a,n=map(float,input().split())  
print(power(a,int(n)))  


"""
Входные данные
Вводится 2 числа - a (вещественное) и n (целое неотрицательное).

Выходные данные
Необходимо вывести  значение an.
"""