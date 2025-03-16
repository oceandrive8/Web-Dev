import math

def mbc(a, b):
    angle=round(math.degrees(math.atan(a / b)))
    print(f"{angle}°")

a=int(input())
b=int(input())
mbc(a, b)
