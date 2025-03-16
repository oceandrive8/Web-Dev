def double_char(s):
    result = ""
    for char in s:
        result = result + char + char
    return result

print(double_char('The'))