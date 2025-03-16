def capitalizee(s):
    words= s.split()
    c_words = [w.capitalize() for w in words]
    result = ' '.join(c_words)
    return result

print(capitalizee(input()))


