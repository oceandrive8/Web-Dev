def caught_speeding(speed, is_birthday):
    if is_birthday:
        speed -= 5
    if speed <= 60:
        return 0
    elif speed <= 80:
        return 1
    else:
        return 2

print(caught_speeding(65, True))


"""
If the adjusted speed is 60 or less, there is no ticket.
If the speed is between 61 and 80 (inclusive), a small ticket is given.
If the speed is 81 or higher, a big ticket is given."""