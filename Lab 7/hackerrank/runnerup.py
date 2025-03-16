def runup(n,a):
    print(sorted(set(a))[-2])

n=int(input())
a=list(map(int,input().split()))
runup(n,a)
