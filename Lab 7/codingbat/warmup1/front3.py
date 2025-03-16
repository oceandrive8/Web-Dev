def front3(s):
    if len(s) < 3:
        front = s
    else:
        front = s[:3]
    result = front + front + front
    return result

print(front3('LOLIK'))