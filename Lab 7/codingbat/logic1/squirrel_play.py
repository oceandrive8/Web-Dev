def squirrel_play(temp, is_summer):
    if is_summer:
        return 60 <= temp <= 100
    return 60 <= temp <= 90
print(squirrel_play(95, True))